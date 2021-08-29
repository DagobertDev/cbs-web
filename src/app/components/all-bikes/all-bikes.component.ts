import {Component, OnInit} from '@angular/core';
import {Bike} from "../../models/bike"
import {BikeService} from "../../services/bike.service"

@Component({
  selector: 'app-all-bikes',
  templateUrl: './all-bikes.component.html',
  styleUrls: ['./all-bikes.component.css'],
})
export class AllBikesComponent implements OnInit {
  bikes: Bike[] = []
  newName: string = ""

  constructor(private bikeService: BikeService) {
  }

  ngOnInit() {
    this.getBikes()
  }

  getBikes() {
    this.bikeService.get().subscribe(bikes => this.bikes = bikes)
  }

  addBike() {
    let name = this.newName;
    this.newName = ""
    this.bikeService.add(name).subscribe(() => this.getBikes())
  }
}
