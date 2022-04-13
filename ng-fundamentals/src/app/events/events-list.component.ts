import { Component } from "@angular/core";

@Component({
    selector: "events-list",
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr />
        <event-thumbnail #thumbnail [event]="firstEvent" (eventClick)="handleEventClick($event)"></event-thumbnail>
        <h4>The {{thumbnail.event.name}} is showing next</h4>

    </div>
    `
})

export class EventsListComponent {
    firstEvent = {
        name: "Angular Connect",
        time: "09:30 AM",
        date: "26.09.2022",
        price: 325.99,
        location: {
            place: "Juanillo",
            city: "Punta Cana",
            country: "Dominican Republic"
        }
    }
    handleEventClick(data) {
        console.log(`Welcome to the ${data.name} event!`);
        
    }
}