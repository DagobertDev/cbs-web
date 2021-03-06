import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router"
import {AuthService} from "../../services/auth.service"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {
  }

  public ngOnInit() {
  }

  signOut() {
    return this.auth.signOut().then(() => this.router.navigate(['/login']))
  }

}
