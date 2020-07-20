import {Component, OnInit} from '@angular/core';
import {Agent} from '../../shared/agent.model';
import {AgentService} from '../agent.service';
import {PackageService} from '../../package/package.service';
import {Package} from '../../shared/package.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../auth/user.model';
import {AuthResponseData, AuthService} from '../../auth/auth.service';


@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.css']
})
export class AgentDetailComponent implements OnInit {
  agent: Agent;
  id: number;
  currentEmail = '';
  editTrue = false;

  agentSelected = false;



  constructor(private agentService: AgentService,
              private router: Router,
              private route: ActivatedRoute,
              ) { }

  ngOnInit(): void {
    this.currentEmail = this.agentService.currentEmail ;

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.agent = this.agentService.getAgent(this.id);

          if (this.agent.email === this.agentService.currentEmail) {
            this.editTrue = true;
          }
        }
      );

    // this.packageService.packageSelected.subscribe(
    //   (packg: Package) => {
    //     this.selectPackage = packg;
    //   }
    // );
   }

  onSelected(feature: Package) {
    // this.packageService.packageSelected.emit(feature);

  }



  onEditSelected() {

  }



}
