import { Component, OnInit } from '@angular/core';
import {Agent} from '../shared/agent.model';
import {AgentService} from './agent.service';
import {Package} from '../shared/package.model';
import {PackageService} from '../package/package.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css'],
})
export class AgentComponent implements OnInit {
  selectedAgent: Agent;


  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
    this.agentService.agentSelected.subscribe(
      (agent: Agent) => {
        this.selectedAgent = agent;
      }
    );
  }

  backToList(feature: string) {
    // this.onAgentPageSelected = feature;
  }

  onSelectedAgent() {
    // this.onAgentPageSelected = 'agentdetail';
  }

}
