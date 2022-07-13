import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  message: string | undefined;
  age: number | undefined;
  birthDate: Date | undefined;
  price: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.message = 'Salut tout le monde';
    this.age = 26;
    this.birthDate = new Date();
    this.price = 10.58;
  }

}
