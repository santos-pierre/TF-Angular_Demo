import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component implements OnInit {

  myFormGroup!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myFormGroup = this._formBuilder.group({
      'name' : [null, null],
      'email' : [null, [Validators.required, Validators.email]],

      'subForm' : this._formBuilder.array([])
    });

    this.getArrayControl().push(new FormControl(null, null));

    console.log(this.myFormGroup.controls);
  }

  getArrayControl() {
    return this.myFormGroup.get('subForm') as FormArray
  }



  submit() {
    let values = this.myFormGroup.value;
    console.log(values);

  }

  getFormValidationErrors(productForm: any) {
    Object.keys(productForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = productForm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
         console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }

}
