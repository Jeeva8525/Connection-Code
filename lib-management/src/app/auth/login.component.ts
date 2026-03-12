import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {

    this.auth.login(this.username, this.password);

    if (this.auth.getRole() === 'admin') {
      this.router.navigate(['/admin']);
    } else {s
      this.router.navigate(['/books']);
    }

  }

}