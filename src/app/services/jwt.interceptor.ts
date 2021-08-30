import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Auth} from "@angular/fire/auth"
import {from, Observable} from 'rxjs';
import {environment} from "../../environments/environment"

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  userToken: string | null = null

  constructor(private auth: Auth) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handle(request, next))
  }

  async handle(request: HttpRequest<any>, next: HttpHandler) {
    const user = this.auth.currentUser
    const isApiUrl = request.url.startsWith(environment.apiUrl);

    if (user != null && isApiUrl) {
      const idToken = await user.getIdToken()

      request = request.clone({
        setHeaders: {Authorization: `Bearer ${idToken}`},
      })
    }

    // Important: Note the .toPromise()
    return next.handle(request).toPromise()
  }
}
