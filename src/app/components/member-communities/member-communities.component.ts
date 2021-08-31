import {Component, OnInit} from '@angular/core';
import {Community} from "../../models/community"
import {AuthService} from "../../services/auth.service"
import {CommunityService} from "../../services/community.service"

@Component({
  selector: 'app-member-communities',
  templateUrl: './member-communities.component.html',
  styleUrls: ['./member-communities.component.css'],
})
export class MemberCommunitiesComponent implements OnInit {
  communities: Community[] = []
  newName: string = ""

  constructor(private auth: AuthService, private communityService: CommunityService) {
  }

  ngOnInit() {
    this.getCommunities()
  }

  getCommunities() {
    return this.communityService.get(this.auth.user!.id).subscribe(communities => this.communities = communities)
  }

  addCommunity() {
    let name = this.newName;
    this.newName = ""
    this.communityService.add(name).subscribe(() => this.getCommunities())
  }
}
