import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from '../models/User';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private _httpClient: HttpClient
  ) { }

  getUsers() {
    return this._httpClient.get<User[]>(this.apiUrl).pipe(
			retry({count: 3, delay: 1000}),
			catchError(this.handleError)
		);
  }

  getUser(id: number) {
    return this._httpClient.get<User>(`${this.apiUrl}/${id}`);
  }

	addUser(user: User): Observable<User> {
		return this._httpClient.post<User>(this.apiUrl, user).pipe(
			catchError(this.handleError)
		)
	}

	private handleError(error: HttpErrorResponse) {
		if (error.status === 0) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong.
			console.error(
				`Backend returned code ${error.status}, body was: `, error.error);
		}
		// Return an observable with a user-facing error message.
		return throwError(() => new Error('Something bad happened; please try again later.'));
	}
}
