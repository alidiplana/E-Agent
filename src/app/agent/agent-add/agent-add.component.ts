import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Agent} from '../../shared/agent.model';
import {AgentService} from '../agent.service';
import {Package} from '../../shared/package.model'
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-agent-add',
  templateUrl: './agent-add.component.html',
  styleUrls: ['./agent-add.component.css']
})
export class AgentAddComponent implements OnInit, OnDestroy {
  agent: Agent;


  constructor(private agentService: AgentService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.agentService.createAddAgent();
    //console.log(this.agent.name);
  }


  ngOnDestroy(): void {

  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newAgent = new Agent(0, value.name, value.email, value.cellNo, value.address, value.introduction, value.status, 'true', value.registration, value.image, null);
    this.agentService.onAgentAdded(newAgent);
    this.router.navigate(['/agents'], {relativeTo: this.route});
  }
}
