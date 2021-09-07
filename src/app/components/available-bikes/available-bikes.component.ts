import {Component} from '@angular/core';
import {of} from "rxjs"
import {switchMap} from "rxjs/operators"
import {Bike} from "../../models/bike"
import {AuthService} from "../../services/auth.service"
import {BikeService} from "../../services/bike.service"

@Component({
  selector: 'app-available-bikes',
  templateUrl: './available-bikes.component.html',
  styleUrls: ['./available-bikes.component.css'],
})
export class AvailableBikesComponent {
  bikes: Bike[] = []
  newName: string = ""

  constructor(private authService: AuthService, private bikeService: BikeService) {
    authService.$user.pipe(switchMap(user => user == null ? of([]) : this.bikeService.getByUser(user.id)))
      .subscribe(bikes => this.bikes = bikes)
  }
}
