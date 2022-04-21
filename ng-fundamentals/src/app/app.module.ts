import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './navbar/nav-bar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

import { EventService } from "./events/shared/event.service";
import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes';

@NgModule({
  declarations: [
    EventsAppComponent, 
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
