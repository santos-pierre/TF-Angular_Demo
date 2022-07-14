import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { MinLengthValidator } from './validators/MinLengthValidator';

@Component({
  selector: 'app-demo11',
  template: './demo11.component.html',
  styleUrls: ['./demo11.component.scss']
})
export class Demo11Component implements OnInit {

  myFormGroup: FormGroup;

  constructor(private _builder: FormBuilder) {
    this.myFormGroup = this._builder.group({
      name: [null, this.Min6Char()],
      customError: [null, MinLengthValidator(5)]
    })
  }

  ngOnInit(): void {
  }

  Min6Char(){
    return (control :FormControl) => {
      let value: string = control.value;
      if (value === null) return null;
      if (value.length < 6) return {"TropCourt": "Le champ doit contenir 6 caractères minimum"}
      return null;
    }
  }

}
