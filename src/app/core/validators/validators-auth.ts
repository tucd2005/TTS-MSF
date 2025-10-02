
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword'); 

    if(!password || !confirmPassword) return null;

    return password.value === confirmPassword.value ? null : {
        passwordMatchValidator : true
    }
}

export const emailValidator: ValidatorFn = (control: AbstractControl) : ValidationErrors | null => {
    const value = control.value; 
    if(!value) return {required: true};
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(value) ? null : {emailInvalid: true}
};


export const passwordMinLength = (min: number) : ValidatorFn => (control: AbstractControl) : ValidationErrors | null => {
    if(!control.value) return {required: true};
    return control.value.length >= min ? null : {minLength: {requiredLength: min, actualLength: control.value.length}}; 
}
