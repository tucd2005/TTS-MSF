import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';


type Member = {
  id: number;
  email: string;
  // role: 'Giáo viên' | 'Học sinh' | '';
  role: string
};
@Component({
  selector: 'app-create-class',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-class.html',
  styleUrl: './create-class.scss',
})
export class CreateClass {
  form: FormGroup;
  members: Member[] = [];
  nextId = 1;
  uploadError = '';

  roleOptions = ['Giáo viên', 'Học sinh'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      className: ['', [Validators.required, Validators.maxLength(120)]],
      classRule: [''],
      memberEmail: [''],
      memberRole: ['Học sinh', Validators.required],
    });
  }

  ngOnInit(): void {}

  addMember() {
    const email = (this.form.get('memberEmail')?.value || '').trim();
    const role = this.form.get('memberRole')?.value || 'Học sinh';
    if (!email) {
      this.form.get('memberEmail')?.setErrors({ required: true });
      return;
    }
    if (!this.isValidEmail(email)) {
      this.form.get('memberEmail')?.setErrors({ email: true });
      return;
    }
    if (this.members.some((m) => m.email.toLowerCase() === email.toLowerCase())) {
      this.form.get('memberEmail')?.setErrors({ duplicate: true });
      return;
    }

    this.members.push({ id: this.nextId++, email, role });
    this.form.get('memberEmail')?.reset();
    this.form.get('memberRole')?.setValue('Học sinh');
  }

  removeMember(id: number) {
    this.members = this.members.filter((m) => m.id !== id);
  }

  onFileChange(event: Event) {
    this.uploadError = '';
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }
    const file = input.files[0];
    if (!file.name.match(/\.(csv|txt)$/i)) {
      this.uploadError = 'Vui lòng tải lên file CSV.';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      this.parseCsv(text);
      input.value = ''; // clear
    };
    reader.onerror = () => {
      this.uploadError = 'Không thể đọc file.';
    };
    reader.readAsText(file);
  }

  parseCsv(text: string) {
    // simple CSV parse: each line contains email[,role]
    const lines = text
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter((l) => l);
    const added: string[] = [];
    for (const line of lines) {
      // allow "email,role" or just "email"
      const parts = line.split(',').map((p) => p.trim());
      const email = parts[0];
      let role = (parts[1] || 'Học sinh').trim();
      if (!this.isValidEmail(email)) {
        // skip invalid email lines
        continue;
      }
      if (role !== 'Giáo viên' && role !== 'Học sinh') role = 'Học sinh';
      if (this.members.some((m) => m.email.toLowerCase() === email.toLowerCase())) continue;
      this.members.push({ id: this.nextId++, email, role });
      added.push(email);
    }
    if (added.length === 0) {
      this.uploadError = 'Không tìm thấy email hợp lệ mới trong file.';
    }
  }

  isValidEmail(email: string) {
    // simple email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.members.length === 0) {
      alert('Vui lòng thêm ít nhất 1 thành viên cho lớp.');
      return;
    }

    const payload = {
      name: this.form.get('className')?.value,
      rule: this.form.get('classRule')?.value,
      members: this.members.map((m) => ({ email: m.email, role: m.role })),
    };

    // TODO: gọi service backend ở đây (ví dụ this.classService.create(payload).subscribe(...))
    console.log('Tạo lớp gửi payload: ', payload);
    alert('Tạo lớp thành công (check console).');

    // reset form
    this.form.reset({ memberRole: 'Học sinh' });
    this.members = [];
    this.nextId = 1;
  }
}
