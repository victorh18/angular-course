import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared";
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
    events:IEvent[];

    constructor(private eventService:EventService, private route:ActivatedRoute) {

    }

    ngOnInit(): void {
        //this.events = this.eventService.getEvents();
        //this.eventService.getEvents().subscribe(e => this.events = e);
        this.events = this.route.snapshot.data['events'];
    }

    handleEventClick(data) {
        console.log(`Welcome to the ${data.name} event!`);
        
    }
}