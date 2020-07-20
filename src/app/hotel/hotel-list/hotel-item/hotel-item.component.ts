import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from '../../../shared/hotel.model';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css']
})
export class HotelItemComponent implements OnInit {
  @Input() hotel: Hotel;

  constructor() { }

  ngOnInit(): void {
  }

}
