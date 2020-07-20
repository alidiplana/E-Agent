import {Component, Input, OnInit} from '@angular/core';
import {Package} from '../../shared/package.model';
import { PackageService } from '../package.service';
import {AgentService} from '../../agent/agent.service';
import {Agent} from '../../shared/agent.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  packages: Package[];
  agent: Agent[];
  days: number;
  name: string;
  minPrice: number;
  maxPrice: number;

  constructor(private packageService: PackageService, private agentService: AgentService) { }

  ngOnInit(): void {
    this.agent = this.agentService.getAgents();
    // this.packages = this.packageService.getPackages()

  }

  onAddItem(form: NgForm) {

  }
}
