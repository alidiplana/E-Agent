import { Component, OnInit } from '@angular/core';
import {RatingService} from '../rating.service';
import {Rating} from '../../shared/rating.model';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.css']
})
export class RatingListComponent implements OnInit {
  ratings: Rating[] = [];

  constructor(private ratingService: RatingService) { }

  ngOnInit(): void {
    this.ratings = this.ratingService.getRating();
  }

}
