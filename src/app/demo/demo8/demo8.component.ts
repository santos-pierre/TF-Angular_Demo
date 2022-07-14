import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component implements OnInit {

  isConnected: boolean;

  constructor(private _authService: AuthService) {
    this.isConnected = this._authService.isConnected;
   }

  ngOnInit(): void {
  }

  login(){
    this._authService.connect();
    this.isConnected = this._authService.isConnected;
  }

  logout() {
    this._authService.disconnect();
    this.isConnected = this._authService.isConnected;
  }

}
