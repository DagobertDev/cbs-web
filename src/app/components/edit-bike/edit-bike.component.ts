import {Component, Input, OnInit} from '@angular/core';
import {Bike} from "../../models/bike"
import {BikeService} from "../../services/bike.service"

@Component({
  selector: 'app-edit-bike[bike]',
  templateUrl: './edit-bike.component.html',
  styleUrls: ['./edit-bike.component.css'],
})
export class EditBikeComponent implements OnInit {
  @Input() bike?: Bike

  constructor(private bikeService: BikeService) {
  }

  ngOnInit(): void {
  }

  delete() {
    if (this.bike != null) {
      this.bikeService.delete(this.bike.id).subscribe(() => this.bike = undefined)
    }
  }
}
