import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {
  currentStyle: any = {};

  isBold: boolean = false;
  isItalic: boolean = false;
  isBig: boolean = false;

  isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setCurrentStyle(){
    this.currentStyle = {
      'font-style' : this.isItalic ? 'italic' : 'normal',
      'font-weight' : this.isBold ? 'bold' : 'normal',
      'font-size' : this.isBig ? '32px' : '16px',
    }
  }

  toggleBold() {
    this.isBold = !this.isBold;
    this.setCurrentStyle();
  }

  toggleItalic() {
    this.isItalic = !this.isItalic;
    this.setCurrentStyle();
  }

  toggleSize() {
    this.isBig = !this.isBig;
    this.setCurrentStyle();
  }

  toggleClass() {
    this.isActive = !this.isActive;
  }

}
