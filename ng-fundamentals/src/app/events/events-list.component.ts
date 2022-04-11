import { Component } from "@angular/core";

@Component({
    selector: "events-list",
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr />
        <event-thumbnail [event]="firstEvent"></event-thumbnail>
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
}