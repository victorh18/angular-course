import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventService,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  TOASTR_TOKEN,
  Toastr,
  UpvoteComponent,
  VoteService,
  LocationValidator
} from './events/index';

import { CollapsibleWellComponent, ModalTriggerDirective } from './common/index';


import { EventsAppComponent } from './events-app.component';

import { NavBarComponent } from './navbar/nav-bar.component';

import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes';

import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JQ_TOKEN } from './common/jquery.service';
import { SimpleModalComponent } from './common/simple-modal.component';
import { EventResolver } from './events/event.resolver';

const toastr: Toastr = window['toastr']
const jQuery = window["$"];

@NgModule({
  declarations: [
    EventsAppComponent, 
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule
  ],
  providers: [
    EventService, 
    EventRouteActivator,
    VoteService,
    EventListResolver,
    AuthService,
    EventResolver,
    { provide: "canDeactivateCreateComponent", useValue: checkDirtyState},
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty) {
      return window.confirm("Are you sure you want to leave without saving?")
  }

  return true;


}