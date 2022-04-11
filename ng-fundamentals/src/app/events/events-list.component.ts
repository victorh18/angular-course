import { Component } from "@angular/core";

@Component({
    selector: "events-list",
    templateUrl: "./events-list.component.html"
})

export class EventsListComponent {
    event = {
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