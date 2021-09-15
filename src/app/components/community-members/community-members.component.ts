import {Component, Input} from '@angular/core';
import {Community} from "../../models/community"
import {CommunityRole, Membership} from "../../models/membership"
import {MembershipService} from "../../services/membership.service"
import {UserService} from "../../services/user.service"

@Component({
  selector: 'app-community-members[community]',
  templateUrl: './community-members.component.html',
  styleUrls: ['./community-members.component.css'],
})
export class CommunityMembersComponent {
  public CommunityRole = CommunityRole
  private _community!: Community

  @Input() set community(value: Community) {
    this._community = value
    this.getMembers()
  }

  get community() {
    return this._community
  }

  members: Membership[] = []
  newMemberEmail: string = ""

  constructor(private membershipService: MembershipService, private userService: UserService) {
  }

  getMembers() {
    this.membershipService.get(this.community.id).subscribe(members => this.members = members)
  }

  async addMember() {
    const email = this.newMemberEmail
    const user = await this.userService.getByEmail(email).toPromise()

    if (user == null) {
      this.newMemberEmail = ""
      return
    }

    const userId = user.id

    this.membershipService.add(this.community.id, userId).subscribe(() => {
      this.newMemberEmail = ""
      this.getMembers()
    })
  }
}
