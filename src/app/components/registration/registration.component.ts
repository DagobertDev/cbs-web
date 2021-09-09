import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms"
import {Router} from "@angular/router"
import {AuthService} from "../../services/auth.service"
import {UserService} from "../../services/user.service"

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  emailControl = new FormControl('', [Validators.required, Validators.email])
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)])

  email = ""
  password = ""

  constructor(private auth: AuthService, private userService: UserService, private router: Router) {
  }

  async register() {
    this.userService.add({
      email: this.email,
      username: this.email,
      password: this.password,
    }).toPromise().then(() => this.auth.signIn(this.email, this.password).then(() => this.router.navigate(['/'])))
  }
}
