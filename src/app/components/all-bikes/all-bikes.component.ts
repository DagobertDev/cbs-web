import {Component, Input} from '@angular/core';
import {Bike} from "../../models/bike"
import {Community} from "../../models/community"
import {BikeService} from "../../services/bike.service"

@Component({
  selector: 'app-all-bikes[community]',
  templateUrl: './all-bikes.component.html',
  styleUrls: ['./all-bikes.component.css'],
})
export class AllBikesComponent {
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

  getBikes() {
    this.bikeService.get(this.community.id).subscribe(bikes => this.bikes = bikes)
  }

  addBike() {
    let name = this.newName;
    this.newName = ""
    this.bikeService.add(this.community.id, name).subscribe(() => this.getBikes())
  }
}
