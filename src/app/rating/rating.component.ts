import {Component, Input, OnInit} from '@angular/core';
import {AgentService} from '../agent/agent.service';
import {Package} from '../shared/package.model';
import {Rating} from '../shared/rating.model';
import {RatingService} from './rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() packageId: number;
  title = 'Package Rating';
  wording = '';


  starList: boolean[] = [true, true, true, true, true];       // create a list which contains status of 5 stars
  rating: number;

  constructor(private agentService: AgentService,
              private ratingService: RatingService) { }

  ngOnInit(): void {
  }


  setStar(data: any){
    this.rating = data + 1;
    for (let i = 0; i <= 4; i++){
      if (i <= data ) {
        this.starList[i] = false;
      }
      else {
        this.starList[i] = true;
      }
    }
  }



  onAddRating() {
    const newRating = new Rating(this.packageId, this.rating, this.wording);
    this.ratingService.addRating(newRating);

  }
}
