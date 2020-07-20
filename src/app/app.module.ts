import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackageComponent } from './package/package.component';
import { PackageListComponent } from './package/package-list/package-list.component';
import { PackageEditComponent } from './package/package-edit/package-edit.component';
import { PackageDetailComponent } from './package/package-detail/package-detail.component';
import { AgentComponent } from './agent/agent.component';
import { AgentListComponent } from './agent/agent-list/agent-list.component';
import { AgentDetailComponent } from './agent/agent-detail/agent-detail.component';
import { AgentEditComponent } from './agent/agent-edit/agent-edit.component';
import { HeaderComponent } from './header/header.component';
import { PackageItemComponent } from './package/package-list/package-item/package-item.component';
import {AgentItemComponent} from './agent/agent-list/agent-item/agent-item.component';
import {AgentAddComponent} from './agent/agent-add/agent-add.component';
import {DropdownDirective} from './shared/dropdown.directive';
import { PackageService } from './package/package.service';
import {AgentService} from './agent/agent.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HotelComponent } from './hotel/hotel.component';
import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AddPackageComponent } from './package/add-package/add-package.component';
import { HotelItemComponent } from './hotel/hotel-list/hotel-item/hotel-item.component';
import { RatingComponent } from './rating/rating.component';
import {AuthIntercepterService} from './auth/auth-intercepter.service';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filter.pipe';
import { DaysPipe } from './days.pipe';
import { MinPipe } from './min.pipe';
import { MaxPipe } from './max.pipe';
import { RatingListComponent } from './rating/rating-list/rating-list.component';
import { RatingItemComponent } from './rating/rating-list/rating-item/rating-item.component';
import { FilterAgentPipe } from './filter-agent.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PackageComponent,
    PackageListComponent,
    PackageEditComponent,
    PackageDetailComponent,
    AgentComponent,
    AgentListComponent,
    AgentDetailComponent,
    AgentEditComponent,
    HeaderComponent,
    PackageItemComponent,
    AgentItemComponent,
    AgentAddComponent,
    DropdownDirective,
    HotelComponent,
    HotelListComponent,
    PageNotFoundComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AddPackageComponent,
    HotelItemComponent,
    RatingComponent,
    HomeComponent,
    FilterPipe,
    DaysPipe,
    MinPipe,
    MaxPipe,
    RatingListComponent,
    RatingItemComponent,
    FilterAgentPipe


  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [PackageService, AgentService, {provide: HTTP_INTERCEPTORS, useClass: AuthIntercepterService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
