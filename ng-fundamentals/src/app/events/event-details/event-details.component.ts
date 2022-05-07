import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent, ISession } from "../shared";

@Component({
    templateUrl: './event-details.component.html',
    styles: [
        `
        .container { padding-left: 20px; padding-right: 20px}
        .event-image { height: 100px}
        a { cursor: pointer }
    `
    ]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean;
    filters = {
        all: true,
        beginner: false,
        intermediate: false,
        advanced: false
    }

    constructor (
        private eventService:EventService, 
        private activatedRoute:ActivatedRoute
    ) {

    }

    ngOnInit() {
        let eventId = +this.activatedRoute.snapshot.params["id"];
        this.event = this.eventService.getEvent(eventId);
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        session.id = Math.max(...this.event.sessions.map(s => s.id)) + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelNewSession() {
        this.addMode = false;
    }

    filterSessions(sessions: ISession[], filters: any): ISession[] {
        if (sessions) {
            if (filters.all) {
                return sessions;
            }
            console.log('values', {
                filters,
                sessions
            });
            
            return sessions.filter(s => filters[s.level.toLowerCase()]);
        }
        console.log('when nothing is filtered');
        
    }
}