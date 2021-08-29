import {Component, Input, OnInit} from '@angular/core';
import {Bike} from "../../models/bike"

@Component({
  selector: 'app-edit-bike[bike]',
  templateUrl: './edit-bike.component.html',
  styleUrls: ['./edit-bike.component.css']
})
export class EditBikeComponent implements OnInit {
  @Input() bike!: Bike

  constructor() { }

  ngOnInit(): void {
  }

}
