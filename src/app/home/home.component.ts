import { Component, OnInit } from '@angular/core';
import {Agent} from '../shared/agent.model';
import {AgentService} from '../agent/agent.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  count = 0;
  agent: Agent[];

  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
    this.agent = this.agentService.getAgents();
  }

  counterAdd() {
    this.count++;
  }
}
