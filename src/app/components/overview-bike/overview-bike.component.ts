import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Bike} from "../../models/bike"
import {BikeService} from "../../services/bike.service"
import {LocationService} from "../../services/location.service"

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

  @Output() updated = new EventEmitter<Bike>()

  constructor(private bikeService: BikeService, private locationService: LocationService) {
  }

  ngOnInit(): void {
  }

  lendBike() {
    return this.bikeService.lend(this.bike).subscribe(bike => this.updated.emit(bike))
  }

  async returnBike() {
    const location = await this.locationService.get().toPromise().catch(() => alert("Standort konnte nicht erfasst werden."))

    if (location != null){
      this.bikeService.return(this.bike, location).subscribe(bike => {
        this.updated.emit(bike)
        alert("Fahrrad zurückgegeben")})
    }
  }
}
