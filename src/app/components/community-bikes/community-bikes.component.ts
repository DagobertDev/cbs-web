import {Component, Input} from '@angular/core';
import {Bike} from "../../models/bike"
import {Community} from "../../models/community"
import {BikeService} from "../../services/bike.service"

@Component({
  selector: 'app-community-bikes[community]',
  templateUrl: './community-bikes.component.html',
  styleUrls: ['./community-bikes.component.css'],
})
export class CommunityBikesComponent {
  private _community!: Community

  @Input() set community(value: Community) {
    this._community = value
    this.getBikes()
  }

  get community() {
    return this._community
  }

  bikes: Bike[] = []
  newName: string = ""

  constructor(private bikeService: BikeService) {
  }

  getBikeId(index: number, bike: Bike) {
    return bike.id
  }

  deleteBike(id: number) {
    this.bikes = this.bikes.filter(bike => bike.id != id)
  }

  getBikes() {
    this.bikeService.getByCommunity(this.community.id).subscribe(bikes => this.bikes = bikes)
  }

  addBike() {
    let name = this.newName;
    this.newName = ""
    this.bikeService.add(this.community.id, name).subscribe(() => this.getBikes())
  }
}
