import {Injectable} from '@angular/core';
import {Auth, authState, signInWithEmailAndPassword, signOut} from "@angular/fire/auth"
import {Observable} from "rxjs"
import {map} from "rxjs/operators"
import {User} from "../models/user"

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user?: User
  $user: Observable<User | undefined>

  constructor(private auth: Auth) {
    this.$user = authState(this.auth).pipe(map(auth => auth == null ? undefined : {
      id: auth.uid,
      email: auth.email!,
      username: auth.displayName ?? auth.email!,
    }))

    this.$user.subscribe(user => this.user = user)
  }

  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  signOut() {
    return signOut(this.auth)
  }
}
