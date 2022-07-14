import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {
  listChildren = ['John', 'Jane', 'Doe'];
  selectedChildren = '';

  constructor() { }

  ngOnInit(): void {
  }

  reactToChildren(name: string){
    this.selectedChildren = name;
  }

}
