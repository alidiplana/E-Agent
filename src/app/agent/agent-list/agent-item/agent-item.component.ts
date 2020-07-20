import {Component, Input, OnInit} from '@angular/core';
import {Agent} from '../../../shared/agent.model';
import {AgentService} from '../../agent.service';
import {PackageService} from '../../../package/package.service';

@Component({
  selector: 'app-agent-item',
  templateUrl: './agent-item.component.html',
  styleUrls: ['./agent-item.component.css']
})
export class AgentItemComponent implements OnInit {
  @Input() agent: Agent;
  @Input() index: number;

  constructor(private agentService: AgentService) { }

  ngOnInit(): void {

  }


}
