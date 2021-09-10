import {Component} from '@angular/core';
import {Observable} from "rxjs"
import {map} from "rxjs/operators"
import {AuthService} from "../../../services/auth.service"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  signedIn: Observable<boolean>

  constructor(private auth: AuthService) {
    this.signedIn = auth.$user.pipe(map(user => user != null))
  }
}
