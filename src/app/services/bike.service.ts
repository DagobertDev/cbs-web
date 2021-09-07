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

  public getByCommunity(communityId: number): Observable<Bike[]> {
    return this.http.get<Bike[]>(`${this.bikesUrl}?communityId=${communityId}`)
  }

  public getByUser(userId: string): Observable<Bike[]> {
    return this.http.get<Bike[]>(`${this.bikesUrl}?userId=${userId}`)
  }

  public add(communityId: number, name: string): Observable<Bike> {
    const bike: Omit<Bike, "id"> = {communityId, name}
    return this.http.post<Bike>(this.bikesUrl, bike)
  }

  public delete(id: number): Observable<Object> {
    return this.http.delete(`${this.bikesUrl}/${id}`)
  }
}
