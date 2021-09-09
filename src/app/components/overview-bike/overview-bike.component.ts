import {Component, Input, OnInit} from '@angular/core';
import {Bike} from "../../models/bike"
import {BikeService} from "../../services/bike.service"

@Component({
  selector: 'app-overview-bike[bike]',
  templateUrl: './overview-bike.component.html',
  styleUrls: ['./overview-bike.component.css'],
})
export class OverviewBikeComponent implements OnInit {
  private _bike!: Bike

  @Input() set bike(value: Bike) {
    this._bike = value
  }

  get bike() {
    return this._bike
  }

  constructor(private bikeService: BikeService) {
  }

  ngOnInit(): void {
  }

  lendBike() {
    return this.bikeService.lend(this.bike).subscribe(bike => this.bike = bike)
  }

  returnBike() {
    return this.bikeService.return(this.bike).subscribe(bike => this.bike = bike)
  }
}
