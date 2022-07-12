import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  numero: number = 0;

  isDisabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  randomNumber(): void {
    this.numero = Math.floor(Math.random()*10);
  }

  resetNumber(): void {
    this.numero = 0;
  }

  toggleButtonActive(): void {
    this.isDisabled = !this.isDisabled;
  }

}
