import {Injectable} from '@angular/core';
import {Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "@angular/fire/auth"
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<any>

  constructor(private auth: Auth) {
    this.user = authState(this.auth)
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  signOut() {
    return signOut(this.auth)
  }
}
