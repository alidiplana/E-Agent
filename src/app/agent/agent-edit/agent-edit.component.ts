import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AgentService} from '../agent.service';
import {Agent} from '../../shared/agent.model';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-agent-edit',
  templateUrl: './agent-edit.component.html',
  styleUrls: ['./agent-edit.component.css']
})
export class AgentEditComponent implements OnInit {

  agent: Agent;
  id: number;
  agentForm: FormGroup;


  constructor(private agentService: AgentService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.agent = this.agentService.getAgent(this.id);
        this.initForm();
      }
    );
  }

  private initForm() {
    let agentName = '';
    let agnetImage = '';
    let agentEmail = '';
    let agentCellNo = '';
    let agentAddress = '';
    let agentIntorduction = '';
    let agentHeaduser = 'true';
    let agentStatus = '';
    let agentRegistrationNo = '';
    let agentPakcages = null;



    const agent = this.agentService.getAgent(this.id);
    agentName = agent.name;
    agnetImage = agent.image;
    agentEmail = agent.email;
    agentCellNo = agent.cellNo;
    agentAddress = agent.address;
    agentIntorduction = agent.introduction;
    agentHeaduser = agent.headUser;
    agentStatus = agent.agentStatus;
    agentRegistrationNo = agent.registrationNo;
    agentPakcages = agent.packages;

    // if(this.edit)

    this.agentForm = new FormGroup({
      'name': new FormControl(agentName, Validators.required),
      'image': new FormControl(agnetImage),
      'email': new FormControl(agentEmail, [Validators.required, Validators.email]),
      'cellNo': new FormControl(agentCellNo),
      'address': new FormControl(agentAddress),
      'introduction': new FormControl(agentIntorduction),
      'headuser': new FormControl(agentHeaduser),
      'status': new FormControl(agentStatus),
      'registrationNo': new FormControl(agentRegistrationNo),
      'Package': new FormControl(agentPakcages),


    });
  }


  onSubmit() {
    const newAgent = new Agent(this.agent.id, this.agentForm.value['name'], this.agentForm.value['email'], this.agentForm.value['cellNo'],  this.agentForm.value['address'],this.agentForm.value['introduction'],this.agentForm.value['status'],'true', this.agentForm.value['registrationNo'],this.agentForm.value['image'], this.agent.packages);
    this.agentService.updateAgent(this.agent.id , newAgent);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
