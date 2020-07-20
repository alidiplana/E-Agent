import {Injectable} from '@angular/core';
import {Rating} from '../shared/rating.model';

@Injectable({providedIn: 'root'})
export class RatingService {
  private ratings: Rating[] = [];
  addRating(rating: Rating){
    this.ratings.push(rating);
    console.log('fsdlskfdjlskjalksdjf ' + this.ratings[0].rating);

  }

  getRating() {
    return this.ratings.slice();
  }


}
