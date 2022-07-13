import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component implements OnInit {
  isOpen: boolean = false;
  choice: number = 0;

  listItem: string[] = ['pommes', 'poires', 'fraises', 'bananes'];

  constructor() { }

  ngOnInit(): void {
  }

}
