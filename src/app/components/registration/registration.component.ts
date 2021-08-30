import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service"
import {UserService} from "../../services/user.service"

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  email = ""
  password = ""

  constructor(private auth: AuthService, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  async register() {
    const credential = await this.auth.register(this.email, this.password)
    const user = credential.user
    return this.userService.add({
      id: user.uid,
      email: user.email!,
      username: user.displayName ?? user.email!,
    }).toPromise()
  }
}
