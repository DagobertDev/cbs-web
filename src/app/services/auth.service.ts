import {Injectable} from '@angular/core';
import {Auth, authState, signInWithEmailAndPassword, signOut} from "@angular/fire/auth"
import {Observable} from "rxjs"
import {first, map} from "rxjs/operators"
import {User} from "../models/user"

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  $user: Observable<User | undefined>

  constructor(private auth: Auth) {
    this.$user = authState(this.auth).pipe(map(auth => auth == null ? undefined : {
      id: auth.uid,
      email: auth.email!,
      username: auth.displayName ?? auth.email!,
    }))
  }

  getUser(): Promise<User | null> {
    return authState(this.auth).pipe(first(), map(user => user == null ? null : {
      id: user.uid,
      email: user.email!,
      username: user.displayName ?? user.email!,
    })).toPromise()
  }

  async isLoggedIn() {
    return await this.getUser() != null
  }

  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  signOut() {
    return signOut(this.auth)
  }
}
