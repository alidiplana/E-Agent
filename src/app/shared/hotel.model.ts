import {Rating} from './rating.model';

export class Hotel {
  constructor(public id: number,
              public name: string,
              public familyRoom: boolean,
              public capacity: number,
              public floors: number,
              public city: string,
              public address: string,
              public rating: Rating) {
  }
}
