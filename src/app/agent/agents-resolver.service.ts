import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Agent} from '../shared/agent.model';
import {DataStorageService} from '../shared/data-storage.service';
import {Observable} from 'rxjs';
import {AgentService} from './agent.service';

@Injectable({providedIn: 'root'})
export class AgentsResolverService implements Resolve<Agent[]>{

  constructor(private dataStorageService: DataStorageService,
              private agentService: AgentService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Agent[]> | Promise<Agent[]> | Agent[] {
    const  agents = this.agentService.getAgents();

    if(agents.length === 0 ) {
      return this.dataStorageService.fetchAgents();
    } return
    agents;

  }

}
