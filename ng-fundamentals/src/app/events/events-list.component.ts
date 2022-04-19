import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";

@Component({
    selector: "events-list",
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr />
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail #thumbnail [event]="event" (eventClick)="handleEventClick($event)"></event-thumbnail>
                <h4>The {{thumbnail.event.name}} is showing next</h4>
            </div>
        </div>
        

    </div>
    `
})

export class EventsListComponent implements OnInit {
    events:any[];

    constructor(private eventService:EventService) {

    }

    ngOnInit(): void {
        this.events = this.eventService.getEvents();
    }

    handleEventClick(data) {
        console.log(`Welcome to the ${data.name} event!`);
        
    }
}