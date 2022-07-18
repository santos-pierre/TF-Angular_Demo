import { Component, OnInit } from '@angular/core';
import { User } from './models/User';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-demo13',
  templateUrl: './demo13.component.html',
  styleUrls: ['./demo13.component.scss']
})
export class Demo13Component implements OnInit {
  users: User[] = [];

  constructor(
    private _userService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    return this._userService.getUsers().subscribe((data) => {
      this.users = data;
    })
  }

}
