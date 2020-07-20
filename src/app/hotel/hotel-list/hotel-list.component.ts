import { Component, OnInit } from '@angular/core';
import {Hotel} from '../../shared/hotel.model';
import {HotelService} from '../hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[];

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.hotels = this.hotelService.Hotels;

  }




}
