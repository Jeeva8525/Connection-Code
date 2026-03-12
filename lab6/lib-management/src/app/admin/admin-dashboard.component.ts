import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  template: `
    <h2>Admin Dashboard</h2>
    <p>Manage Library Books</p>

    <a routerLink="/books">View Books</a>
  `
})
export class AdminComponent {}