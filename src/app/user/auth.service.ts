import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;
  redirectUrl: string;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }
  login(userName: string, password: string): void {
    if ( !userName || !password) {
      // Do something
    }

    this.currentUser = {
      id: 1,
      userName
    };
  }
}
