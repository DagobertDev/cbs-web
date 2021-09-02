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

  async ngOnInit() {
    await this.getCommunities()
  }

  async getCommunities() {
    return this.communityService.get((await this.auth.getUser())!.id).subscribe(communities => this.communities = communities)
  }

  addCommunity() {
    let name = this.newName;
    this.newName = ""
    this.communityService.add(name).subscribe(() => this.getCommunities())
  }
}
