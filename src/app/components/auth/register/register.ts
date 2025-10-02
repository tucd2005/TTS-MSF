import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from './../../../core/services/auth';
import { passwordMatchValidator } from '../../../core/validators/validators-auth';
import { ValidationMessage } from '../../../shared/validation-message/validation-message';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, ValidationMessage],
templateUrl: './register.html',
styleUrls: ['./register.scss']

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
      
      if(this.registerForm.invalid){
        this.registerForm.markAllAsTouched()
        return;
      } 

      const rawForm = this.registerForm.getRawValue();
      this.authService.register(rawForm).subscribe({
        next: () => {
          alert('Đăng ký thành công! Vui lòng đăng nhập.')
          this.router.navigate(['/auth/login']);
        },
        error: (err) => {
          alert('Đã có lỗi xảy ra!');
          console.error(err);
          
        }
      })
     }
}
