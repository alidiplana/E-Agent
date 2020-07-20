import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgentComponent} from './agent/agent.component';
import {PackageComponent} from './package/package.component';
import {AgentDetailComponent} from './agent/agent-detail/agent-detail.component';
import {AgentEditComponent} from './agent/agent-edit/agent-edit.component';
import {AgentListComponent} from './agent/agent-list/agent-list.component';
import {AgentAddComponent} from './agent/agent-add/agent-add.component';
import {PackageListComponent} from './package/package-list/package-list.component';
import {PackageDetailComponent} from './package/package-detail/package-detail.component';
import {HotelComponent} from './hotel/hotel.component';
import {AgentsResolverService} from './agent/agents-resolver.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthComponent} from './auth/auth.component';
import {PackageEditComponent} from './package/package-edit/package-edit.component';
import {AddPackageComponent} from './package/add-package/add-package.component';
import {HotelListComponent} from './hotel/hotel-list/hotel-list.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', component: PackageComponent, children: [
      {path: 'packages', component: PackageListComponent},
      {path: 'packages/:id', component: PackageDetailComponent},
      {path: 'packages/:id/edit', component: PackageEditComponent}
    ]},
  {path: '', component: AgentComponent, children: [
      {path: 'agents', component: AgentListComponent},
      {path: 'agents/:id', component: AgentDetailComponent, resolve: [AgentsResolverService]},
      {path: 'agents/:id/add-package', component: AddPackageComponent},
      // {path: ':name/:id/detail', component: PackageDetailComponent},
      {path: 'agents/:id/edit-agent', component: AgentEditComponent, resolve: [AgentsResolverService]},
      {path: 'add-agent', component: AgentAddComponent}
    ] },

  {path: 'hotel', component: HotelComponent, children: [
      {path: '', component: HotelListComponent},
      {path: ':id', component: HotelListComponent}
    ]
  },
  {path: 'auth', component: AuthComponent},
  {path: '**', component: PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
