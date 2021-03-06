import {HttpClient} from "@angular/common/http"
import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs"
import {catchError} from "rxjs/operators"
import {environment} from "../../environments/environment"
import {User} from "../models/user"
import {AuthService} from "./auth.service"

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = environment.apiUrl + '/user';

  constructor(private auth: AuthService, private http: HttpClient) {
  }

  public get(id: string): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/${id}`)
  }

  public getByEmail(email: string): Observable<User | null> {
    return this.http.get<User>(`${this.userUrl}?email=${email}`).pipe(catchError(() => of(null)))
  }

  public add(user: UserWrite): Observable<User> {
    return this.http.post<User>(this.userUrl, user)
  }

  public delete(id: number): Observable<Object> {
    return this.http.delete(`${this.userUrl}/${id}`)
  }
}

interface UserWrite {
  email: string
  password: string
  username: string
}
