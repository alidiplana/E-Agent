import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Package} from '../../shared/package.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AgentService} from '../../agent/agent.service';
import {Agent} from '../../shared/agent.model';

@Component({
  selector: 'app-package-edit',
  templateUrl: './package-edit.component.html',
  styleUrls: ['./package-edit.component.css']
})
export class PackageEditComponent implements OnInit {

  packageForm: FormGroup;
  id: number;
  package: Package;

  constructor(private route: ActivatedRoute,
              private agentService: AgentService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.package = this.agentService.getPackage(this.id);
          this.initForm();
        }
      );
  }

  private initForm() {
    let packageName = '';
    let packageImage = '';
    let packageType = '';
    let packageDescription = '';
    let packageStatus = true;
    let packagePrice = 0;
    let packageValidDate = 'true';
    let packageStartDate = '';
    let packageEndDate = '';
    let packageDays = 0;




    const pac = this.agentService.getPackage(this.id);
    packageName = pac.name;
    packageImage = pac.image;
    packageType = pac.packageType;
    packageDescription = pac.description;
    packageStatus = pac.packageStatus;
    packagePrice = pac.price;
    packageDays = pac.days;
    packageValidDate = pac.validDate;
    packageStartDate = pac.startDate;
    packageEndDate = pac.endDate;


    // if(this.edit)

    this.packageForm = new FormGroup({
      'name': new FormControl(packageName, Validators.required),
      'image': new FormControl(packageImage),
      'packageType': new FormControl(packageType),
      'descrption': new FormControl(packageDescription),
      'packageStatus': new FormControl(packageStatus),
      'price': new FormControl(packagePrice),
      'days': new FormControl(packageDays),
      'validDate': new FormControl(packageValidDate),
      'startDate': new FormControl(packageStartDate),
      'endDate': new FormControl(packageEndDate),


    });
  }


  onSubmit() {
    const newPackage = new Package(this.package.id, this.packageForm.value['name'], this.packageForm.value['image'], this.packageForm.value['packageType'], this.packageForm.value['descrption'],  true, this.packageForm.value['price'],this.packageForm.value['validDate'], this.packageForm.value['startDate'],this.packageForm.value['endDate'],this.packageForm.value['days'], this.package.rating);
    this.agentService.updatePackage(this.package.id , newPackage);
    this.router.navigate(['../'], {relativeTo: this.route});
  }


}
