import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {

  liste: string[] = ['Sel', 'Poivre'];

  constructor() { }

  ngOnInit(): void {
  }

  ajout(value:string) {
    this.liste.push(value);
  }

  delete(index: number) {
    this.liste.splice(index, 1);
  }

}
