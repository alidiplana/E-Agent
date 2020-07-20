import {Injectable} from '@angular/core';
import {Hotel} from '../shared/hotel.model';

@Injectable({providedIn: 'root'})
export class HotelService {
  private hotels: Hotel[] = [
    new Hotel(1, 'Al-Saud', true, 500,10, 'Makkah', 'Sultan Road, Makkah', null),
    new Hotel(2, 'Al-Makkah', false, 600,20, 'Makkah','Shah Road, Makkah', null),
    new Hotel(3, 'Al-Madina', true, 500,30, 'Madina', 'Sultan Road, Madina', null),
  ];

  get Hotels() {
    return this.hotels;
  }

}
