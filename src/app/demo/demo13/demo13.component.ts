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
    return this._userService.getUsers()
			.subscribe({
				next: (value) => {
					this.users = value
				},
				error: (err) => {
					console.log(err);
				},
				complete: () => {
					console.log('DONE GET');
				}
			})
  }

	addUser() {
		return this._userService.addUser({
			"id": 11,
			"name": "Pierre",
			"username": "psantos",
			"email": "pierre.santos@bstorm.be",
			"address": {
				"street": "Rue de la prévoyance",
				"suite": "Suite 198",
				"city": "Lebsackbury",
				"zipcode": "31428-2261",
				"geo": {
					"lat": "-38.2386",
					"lng": "57.2232"
				}
			},
			"phone": "024-648-3804",
			"website": "ambrose.net",
			"company": {
				"name": "Hoeger LLC",
				"catchPhrase": "Centralized empowering task-force",
				"bs": "target end-to-end models"
			}
		}).subscribe({
			next: (value) => {
				this.users.push(value);
			},
			error: (err) => {
				console.log(err);
			},
			complete: () => {
				console.log("DONE");
			}
		});
	}

}
