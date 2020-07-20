import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.dataStorageService.storeAgents();
  }

}
