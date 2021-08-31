import {HttpClient} from "@angular/common/http"
import {Injectable} from '@angular/core';
import {Observable} from "rxjs"
import {environment} from "../../environments/environment"
import {Community} from "../models/community"

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  private communitiesUrl = environment.apiUrl + '/communities';

  constructor(private http: HttpClient) {
  }

  public get(memberId: string): Observable<Community[]> {
    return this.http.get<Community[]>(`${this.communitiesUrl}?member=${memberId}`)
  }

  public add(name: string): Observable<Community> {
    const community: Omit<Community, 'id'> = {name}
    return this.http.post<Community>(this.communitiesUrl, community)
  }

  public delete(id: number): Observable<Object> {
    return this.http.delete(`${this.communitiesUrl}/${id}`)
  }
}
