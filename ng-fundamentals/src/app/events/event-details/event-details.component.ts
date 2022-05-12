import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent, ISession } from "../shared";
import { SESSION_SORT_TYPES } from "../shared/sort-types";

@Component({
    templateUrl: './event-details.component.html',
    styles: [
        `
        .container { padding-left: 20px; padding-right: 20px}
        .event-image { height: 100px}
        a { cursor: pointer }
        option { color: black}
        select { color: black}
    `
    ]
})
export class EventDetailsComponent implements OnInit {
    sortTypes = SESSION_SORT_TYPES;
    selectedSort: string = SESSION_SORT_TYPES[0].name;
    sortDesc: boolean = false;

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
        this.activatedRoute.params.forEach(p => {
            this.event = this.eventService.getEvent(+p.id);
            
        })
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

    filterSessions(sessions: ISession[], filters: any, selectedSort, sortDesc): ISession[] {
        let filteredSessions: ISession[];

        if (sessions) {
            if (filters.all) {
                filteredSessions = sessions.slice(0);
            } else {
                filteredSessions = sessions.slice(0).filter(s => filters[s.level.toLowerCase()])
            }
        
            let sortFunction = this.getSortFunction(this.sortTypes, selectedSort, sortDesc)(sortDesc)

            filteredSessions = filteredSessions.sort(sortFunction);
            
            return filteredSessions;
        }
        
    }

    getSortFunction(sortTypes, selectedSort, sortDesc): any {
        for (let index = 0; index < sortTypes.length; index++) {
            const sortType = sortTypes[index];
            if (sortType.name === selectedSort) {
                return sortType.sortFunction;
            }
        }
        
    }
}