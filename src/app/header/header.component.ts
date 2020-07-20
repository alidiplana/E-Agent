import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {AgentService} from '../agent/agent.service';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy{
  isAuthenticated: boolean;
  private userSub: Subscription;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;

    });
  }

  ngOnDestroy(): void {
  }

  onSaveData() {
    this.dataStorageService.storeAgents();
  }

  onFetchData() {
    this.dataStorageService.fetchAgents().subscribe();
  }
  onLogout() {
    this.dataStorageService.storeAgents();
    this.authService.logout();
    this.router.navigate(['/auth']);
  }


}
