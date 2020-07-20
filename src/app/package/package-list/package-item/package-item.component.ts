import {Component, Input, OnInit} from '@angular/core';
import {Package} from '../../../shared/package.model';
import {PackageService} from '../../package.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Agent} from '../../../shared/agent.model';

@Component({
  selector: 'app-package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.css']
})
export class PackageItemComponent implements OnInit {
  @Input() package: Package;
  @Input() index: number;
  @Input() agent: Agent;
  @Input() agentView = false;


  constructor(
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    //console.log(this.package.name);



  }


}
