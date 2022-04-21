import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Router } from "@angular/router";
import { EventService } from "../shared/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate {
    /**
     *
     */
    constructor(
        private eventService:EventService,
        private router:Router
    ) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let eventIsValid = !!this.eventService.getEvent(+route.params['id']);

        !eventIsValid && this.router.navigate(['/404']);
        
        return eventIsValid;
    }
}