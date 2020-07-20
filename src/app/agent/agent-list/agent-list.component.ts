import {Component, OnInit} from '@angular/core';
import {Agent} from '../../shared/agent.model';
import {AgentService} from '../agent.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {
  name = '';
  onAgentListSelected = 'agentitem';
  subscription: Subscription;
  allowEdit = false;

  agents: Agent[];

  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
    this.agentService.agentChanged
      .subscribe(
        (agents: Agent[]) => {
          this.agents = agents;
        }
      );
    this.agents = this.agentService.getAgents();
    for (let i = 0; i < this.agents.length; i++){
      if(this.agents[i].email === this.agentService.currentEmail){
        this.allowEdit = true;
        console.log('alsid ' + this.allowEdit);
      }
    }
  }
  fetchAgents(){
    if (this.agentService.agentFetched === true) {

    }
  }
}
