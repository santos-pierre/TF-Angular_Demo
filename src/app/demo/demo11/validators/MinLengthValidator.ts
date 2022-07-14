import { AbstractControl, ValidatorFn } from "@angular/forms";

export const MinLengthValidator = (length: number): ValidatorFn => {
  return (control: AbstractControl) => {
    const value: string = control.value;

    if (value == null) return null;
    if (value.length < length) return {'error': 'string too short'}
    return null;
  }
}