import {Component, OnInit} from '@angular/core';
import {of} from "rxjs"
import {Bike} from "../../models/bike"
import {AuthService} from "../../services/auth.service"
import {BikeService} from "../../services/bike.service"

@Component({
  selector: 'app-available-bikes',
  templateUrl: './available-bikes.component.html',
  styleUrls: ['./available-bikes.component.css'],
})
export class AvailableBikesComponent implements OnInit {
  bikes: Bike[] = []
  newName: string = ""
  refreshing: boolean = false

  constructor(private authService: AuthService, private bikeService: BikeService) {
  }

  public ngOnInit() {
    this.refreshBikes()
  }

  public refreshBikes() {
    if (this.refreshing) {
      return
    }

    this.refreshing = true
    this.authService.getUser().then(user => user == null ? of([]) : this.bikeService.getByUser(user.id).subscribe(bikes => {
      this.bikes = bikes
      this.refreshing = false
    }))
  }
}
