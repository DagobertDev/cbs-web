import {Component, Input} from '@angular/core';
import {Community} from "../../models/community"

@Component({
  selector: 'app-community-overview',
  templateUrl: './community-overview.component.html',
  styleUrls: ['./community-overview.component.css'],
})
export class CommunityOverviewComponent {
  private _community!: Community

  @Input() set community(value: Community) {
    this._community = value
  }

  get community() {
    return this._community
  }
}
