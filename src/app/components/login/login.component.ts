import {Component} from '@angular/core';
import {Router} from "@angular/router"
import {AuthService} from "../../services/auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = ""
  password = ""

  constructor(private auth: AuthService, private router: Router) {
  }

  signIn() {
    return this.auth.signIn(this.email, this.password).then(() => this.router.navigate(['/']))
  }
}
