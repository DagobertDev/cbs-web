import {Component} from '@angular/core';
import {Bike} from "../models/bike"
import {BikeService} from "../services/bike.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  bikes: Bike[] | undefined

  constructor(private bikeService: BikeService) {
  }

  ngOnInit() {
    this.getBikes()
  }

  getBikes() {
    this.bikeService.get().subscribe(bikes => this.bikes = bikes)
  }

  title = 'Community Bike-Sharing';
}
