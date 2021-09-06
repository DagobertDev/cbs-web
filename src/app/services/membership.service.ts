import {HttpClient} from "@angular/common/http"
import {Injectable} from '@angular/core';
import {Observable} from "rxjs"
import {environment} from "../../environments/environment"
import {CommunityRole, Membership} from "../models/membership"

@Injectable({
  providedIn: 'root',
})
export class MembershipService {
  private static membershipsUrl(communityId: number) {
    return `${environment.apiUrl}/communities/${communityId}/members`;
  }

  constructor(private http: HttpClient) {
  }

  public get(communityId: number): Observable<Membership[]> {
    return this.http.get<Membership[]>(MembershipService.membershipsUrl(communityId))
  }

  public add(communityId: number, userId: string): Observable<Membership> {
    const community: Omit<Membership, 'username'> = {communityId, userId, role: CommunityRole.User}

    return this.http.post<Membership>(MembershipService.membershipsUrl(communityId), community)
  }
}
