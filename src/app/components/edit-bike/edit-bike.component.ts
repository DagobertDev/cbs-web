import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Bike} from "../../models/bike"
import {BikeService} from "../../services/bike.service"

@Component({
  selector: 'app-edit-bike[bike]',
  templateUrl: './edit-bike.component.html',
  styleUrls: ['./edit-bike.component.css'],
})
export class EditBikeComponent implements OnInit {
  @Input() bike!: Bike
  @Output() deleted = new EventEmitter()
  newName = ""

  constructor(private bikeService: BikeService) {
  }

  ngOnInit(): void {
    this.newName = this.bike.name
  }

  rename() {
    this.bike.name = this.newName
    this.bikeService.update(this.bike).subscribe(b => Object.assign(b, this.bike))
  }

  delete() {
    this.bikeService.delete(this.bike.id).subscribe(this.deleted.emit)
  }
}
