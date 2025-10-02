import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation-message',
  imports: [CommonModule],
  templateUrl: './validation-message.html',
  styleUrls: ['./validation-message.scss']
})
export class ValidationMessage {
    @Input() control: AbstractControl | null = null; 
    @Input() fieldName: string = "Trường này"; 

    public errorMessages: {[key: string]: (name: string, error: any) => string} = {
      'required': (name) => `${name} không được để trống`,
      'email': () => `Địa chỉ Email không hợp lệ`,
      'emailInvalid': () => `Địa chỉ email không hợp lệ`,
      'minLength': (name, error) => `${name} phải có ít nhất ${error.requiredLength} kí tự`,
      'passwordMatchValidator': () => `Mật khẩu nhập lại không khớp`
    };

    get errorMessage(): string | null {
      if(!this.control) return null;

      if(!this.control.invalid || (!this.control.dirty && !this.control.touched)) {
        return null;
      }

      if(this.control.parent?.errors) {
        const groupErrors = this.control.parent.errors;

        if(groupErrors['passwordMatchValidator'] && this.control.parent.get('confirmPassword') === this.control){
          return this.errorMessages['passwordMatchValidator'](this.fieldName, null);
        }
      }

      const errors = this.control.errors; 
      if(errors) {
        const errorKey = Object.keys(errors)[0];
        const messageGenerator = this.errorMessages[errorKey];
        if(messageGenerator) {
          return messageGenerator(this.fieldName, errors[errorKey]);
        }
      }

      return null
    }
}
