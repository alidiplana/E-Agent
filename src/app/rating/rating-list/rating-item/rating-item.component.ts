import {Component, Input, OnInit} from '@angular/core';
import {Rating} from '../../../shared/rating.model';

@Component({
  selector: 'app-rating-item',
  templateUrl: './rating-item.component.html',
  styleUrls: ['./rating-item.component.css']
})
export class RatingItemComponent implements OnInit {
  @Input() rating: Rating;

  constructor() { }

  ngOnInit(): void {
  }

}
