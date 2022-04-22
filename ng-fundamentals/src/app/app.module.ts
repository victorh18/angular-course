import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './navbar/nav-bar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

import { EventService } from "./events/shared/event.service";
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
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
    { provide: "canDeactivateCreateComponent", useValue: checkDirtyState}
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