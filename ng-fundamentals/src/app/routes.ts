import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver
} from './events/index';

export const AppRoutes:Routes = [
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateComponent'] },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path:  '', redirectTo: '/events', pathMatch: "full"},
    { path: 'user', 
        loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
]