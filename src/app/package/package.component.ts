import { Component, OnInit } from '@angular/core';
import {Package} from '../shared/package.model';
import {PackageService} from './package.service';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {


  }

}
