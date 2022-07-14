import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss']
})
export class ParamsComponent implements OnInit {

  parameter: string = '42';

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.parameter = this._activatedRoute.snapshot.params['param'];
  }

}
