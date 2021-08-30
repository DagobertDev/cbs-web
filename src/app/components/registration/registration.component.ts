import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service"

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  email = ""
  password = ""

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  register() {
    this.auth.register(this.email, this.password)
  }
}
