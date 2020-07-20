import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import {Agent} from '../shared/agent.model';
import {AgentService} from '../agent/agent.service';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private agentService: AgentService,
    private authService: AuthService
  ) {}

  storeAgents() {
    const agents = this.agentService.getAgents();

    this.http
      .put(
        'https://e-agent-39d9a.firebaseio.com/agents.json',
        agents
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchAgents() {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        return this.http.get<Agent[]>(
          'https://e-agent-39d9a.firebaseio.com/agents.json',
          {
            params: new HttpParams().set('auth', user.token)
          }
        );
      }),
      map(agents => {
        return agents.map(agent => {
          return {
            ...agent,
            packages: agent.packages ? agent.packages : []
          };
        });
      }),
      tap(agents => {
        this.agentService.setAgents(agents);
      })
    );
  }
}
