import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss']
})
export class Exo1Component implements OnInit {

  timer!: any;
  temps: number = 0;

  constructor() {}

  ngOnInit(): void {

  }

  start(){
    this.timer = setInterval(() => {
      this.temps++
    }, 1000);
  }

  stop(){
    clearInterval(this.timer);
  }

  reset(){
    this.temps = 0;
    this.stop();
  }

}
