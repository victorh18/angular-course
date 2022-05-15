import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { EventResolver } from "./events/event.resolver";

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent
} from './events/index';

export const AppRoutes:Routes = [
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateComponent'] },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path:  '', redirectTo: '/events', pathMatch: "full"},
    { path: 'user', 
        loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
]