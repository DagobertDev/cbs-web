import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms"
import {Router} from "@angular/router"
import {AuthService} from "../../services/auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  emailControl = new FormControl('', [Validators.required, Validators.email])
  passwordControl = new FormControl('', [Validators.required])

  email = ""
  password = ""

  constructor(private auth: AuthService, private router: Router) {
  }

  signIn() {
    return this.auth.signIn(this.email, this.password).then(() => this.router.navigate(['/']))
  }
}
