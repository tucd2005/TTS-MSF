import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from './../../../core/services/auth';

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl
) : ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  
  if(!password || !confirmPassword) {
    return null;
  }
  
  if(password.value !== confirmPassword.value) {
    confirmPassword.setErrors({passwordMismatch: true});
    return {passwordMismatch: true};
  } else {
    confirmPassword.setErrors(null);
    return null;
  }
}


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
templateUrl: './register.html',
  styleUrl: './register.scss'
})

export class Register {
  private fb = inject(FormBuilder);
     private authService = inject(Auth);
     private router = inject(Router)

     registerForm = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
     }, {
        validators: passwordMatchValidator 
     })

     onSubmit() {      
      console.log("submit clicked", this.registerForm.value, this.registerForm.valid);
      
      if(this.registerForm.invalid) return;

      const rawForm = this.registerForm.getRawValue();
      this.authService.register(rawForm).subscribe({
        next: () => {
          alert('Đăng ký thành công! Vui lòng đăng nhập.')
          this.router.navigate(['/auth/ login']);
        },
        error: (err) => {
          alert('Đã có lỗi xảy ra!');
          console.error(err);
          
        }
      })
     }
}
