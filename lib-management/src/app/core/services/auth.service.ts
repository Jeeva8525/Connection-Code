import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  role: string | null = null;

  login(username: string, password: string) {

    if (username === 'admin') {
      this.role = 'admin';
    } else {
      this.role = 'student';
    }

  }

  getRole() {
    return this.role;
  }

  isAdmin() {
    return this.role === 'admin';
  }

  logout() {
    this.role = null;
  }

}