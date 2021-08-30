import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = ""
  password = ""

  constructor(private auth: AuthService) {
  }

  signIn() {
    return this.auth.signIn(this.email, this.password)
  }
}
