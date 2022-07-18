import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private _httpClient: HttpClient
  ) { }

  getUsers() {
    return this._httpClient.get<User[]>(this.apiUrl);
  }

  getUser(id: number) {
    return this._httpClient.get(`${this.apiUrl}/${id}`);
  }
}
