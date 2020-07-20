import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Agent} from '../../shared/agent.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AgentService} from '../../agent/agent.service';
import {Package} from '../../shared/package.model';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {
  package: Package;
  id: number;


  constructor(private agentService: AgentService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log(this.id);

        }
      );
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const newPackage = new Package(0, value.name, value.image, value.packageType, value.description, value.packageStatus, value.price, value.validDate, value.startDate, value.endDate, value.days, null);
    this.agentService.onPackageAdded(this.id, newPackage);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
