import {HttpClient} from "@angular/common/http"
import {Injectable} from '@angular/core';
import {Observable} from "rxjs"
import {environment} from "../../environments/environment"
import {Bike} from "../models/bike"

@Injectable({
  providedIn: 'root',
})
export class BikeService {
  private bikesUrl = environment.apiUrl + '/bikes';

  constructor(private http: HttpClient) {
  }

  public get(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.bikesUrl)
  }
}
