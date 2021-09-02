import {Component, Input, OnInit} from '@angular/core';
import {Bike} from "../../models/bike"
import {BikeService} from "../../services/bike.service"

@Component({
  selector: 'app-all-bikes[community]',
  templateUrl: './all-bikes.component.html',
  styleUrls: ['./all-bikes.component.css'],
})
export class AllBikesComponent implements OnInit {
  @Input() community!: number
  bikes: Bike[] = []
  newName: string = ""

  constructor(private bikeService: BikeService) {
  }

  ngOnInit() {
    this.getBikes()
  }

  getBikes() {
    this.bikeService.get(this.community).subscribe(bikes => this.bikes = bikes)
  }

  addBike() {
    let name = this.newName;
    this.newName = ""
    this.bikeService.add(this.community, name).subscribe(() => this.getBikes())
  }
}
