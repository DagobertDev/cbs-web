import {Component} from '@angular/core';
import {Router} from "@angular/router"
import {AuthService} from "../../services/auth.service"

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {

  constructor(private auth: AuthService, private router: Router) {
  }

  signOut() {
    return this.auth.signOut().then(() => this.router.navigate(['/login']))
  }
}
