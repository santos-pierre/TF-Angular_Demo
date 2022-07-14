import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo10',
  templateUrl: './demo10.component.html',
  styleUrls: ['./demo10.component.scss']
})
export class Demo10Component implements OnInit {

  parameter: number = 42;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  redirect(){
    this._router.navigate([`demos/param/${this.parameter}`]);
  }
}
