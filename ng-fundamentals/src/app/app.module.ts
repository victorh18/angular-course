import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  Toastr
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

let toastr: Toastr = window['toastr']
let jQuery = window["$"];

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
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    EventService, 
    EventRouteActivator,
    { provide: "canDeactivateCreateComponent", useValue: checkDirtyState},
    EventListResolver,
    AuthService,
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