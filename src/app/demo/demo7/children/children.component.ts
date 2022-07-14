import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {
  @Input() name: string = '';

  @Output() sayHi: EventEmitter<string>;

  constructor() {
    this.sayHi = new EventEmitter<string>();
   }

  ngOnInit(): void {
  }

  sayHelloToParent(name: string){
    this.sayHi.emit(name);
  }

}
