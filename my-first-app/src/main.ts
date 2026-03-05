import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello, {{ name }}!</h1>
    <input type="text" [(ngModel)]="fullName" placeholder="Enter your name">
    <p> The entered name is {{fullName}} </p>
  `
})
class App { name = 'Angular 20'; }

bootstrapApplication(App);
