import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: Partial<User> = {};

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _userService: UsersService
  ) { }

  ngOnInit(): void {
    this._userService.getUser(this._activatedRoute.snapshot.params['id'])
        .subscribe({
          next: (data) => {
            this.user = data
          },
          error: (error) => {
            if (error.status === 404) {
              this._router.navigate(['/not-found']);
            }
          }
        })
  }
}
