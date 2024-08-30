import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validateNotNullOrEmpty(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return control.value == 'null' ||
             control.value == null || 
             control.value == '' 
             ? { 'required': true } 
             : null;
  };
}
