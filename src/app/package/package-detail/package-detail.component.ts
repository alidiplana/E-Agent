import {Component, Input, OnInit} from '@angular/core';
import {Package} from '../../shared/package.model';
import {PackageService} from '../package.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AgentService} from '../../agent/agent.service';
import {Agent} from '../../shared/agent.model';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css']
})
export class PackageDetailComponent implements OnInit {
  pkg: Package;
  totalRating = 0 ;
  id: number;
  selct = 'Select Package';
  agents: Agent[] = [];
  editTrue = false;
  constructor(private route: ActivatedRoute,
              private agentService: AgentService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.pkg = this.agentService.getPackage(this.id);
        }
      );
    console.log('ste te flaksdsldkfjsldkjf');
    for (let i = 0; i < this.agents.length; i++) {
      for (let j = 0; j < this.agents[i].packages.length; j++) {
        console.log(i + '  ' + j);
          if(this.agents[i].packages[j].id === this.id){
            console.log('ste teo flaksdjf');
            if(this.agents[i].email === this.agentService.currentEmail){
              this.editTrue = true;
              console.log('set to true');

            }
          }
      }
    }
    // if (this.agent.email === this.agentService.currentEmail) {
    //   this.editTrue = true;
    // }
    this.pkg = this.agentService.getPackage(this.id);
    // if(this.agentService.getRatings(this.pkg.id) !== 0) {
      // this.totalRating = this.agentService.getRatings(this.pkg.id);
    // }
  }


  packageSelected() {
    this.selct = 'Package Selected';

  }
}
