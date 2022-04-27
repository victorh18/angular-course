import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventService,
  CreateEventComponent,
  EventListResolver
} from './events/index';


import { EventsAppComponent } from './events-app.component';

import { NavBarComponent } from './navbar/nav-bar.component';

import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes';

import { Error404Component } from './errors/404.component';


@NgModule({
  declarations: [
    EventsAppComponent, 
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    EventService, 
    EventRouteActivator,
    { provide: "canDeactivateCreateComponent", useValue: checkDirtyState},
    EventListResolver
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