import {isPlatformBrowser} from "@angular/common"
import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {Observable, of} from "rxjs"
import {map} from "rxjs/operators"
import {AuthService} from "../../../services/auth.service"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  signedIn: Observable<boolean>

  constructor(private auth: AuthService, @Inject(PLATFORM_ID) platformId: Object) {
    if (isPlatformBrowser(PLATFORM_ID)) {
      this.signedIn = auth.$user.pipe(map(user => user != null))
    } else {
      this.signedIn = of(false)
    }
  }
}
