import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-popup-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './popup-register.html',
  styleUrls: ['./popup-register.scss'],
})
export class PopupRegister {
  private fb = new FormBuilder();

  /**
   * mode: 'info' (form nhập thông tin) | 'success' (popup thành công)
   */
  @Input() mode: 'info' | 'success' = 'info';

  /** Sự kiện đóng popup hoặc chuyển bước */
  @Output() closed = new EventEmitter<void>();
  @Output() submitted = new EventEmitter<any>();
  @Output() success = new EventEmitter<void>();

  infoForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    birth: [''],
    school: [''],
    role: ['', Validators.required],
  });

  onSubmitInfo() {
    console.log('submit chạy');
    this.mode = 'success';
    if (this.infoForm.invalid) {
      this.infoForm.markAllAsTouched();
      return;
    }

    // Demo: chuyển luôn sang popup thành công
    this.mode = 'success';

    // Nếu sau này bạn cần gửi dữ liệu thật:
    // this.submitted.emit(this.infoForm.getRawValue());
  }

  onSuccessClick() {
    this.success.emit();
  }

  onClose() {
    this.closed.emit();
  }
}
