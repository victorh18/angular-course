import { Component } from "@angular/core";

@Component({
    "selector": "events-list",
    "template": `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr />
            <div class="well thumbnail hoverwell">
                <h2>{{event.name}}</h2>
                <div><strong>Time: </strong>{{event.time}} &nbsp;</div>
                <div><strong>Date: </strong>{{event.date}}</div>
                <div><strong>Price: </strong>\${{event.price}}</div>
                <div><strong>Location: </strong>{{event.location.place}},&nbsp;{{event.location.city}},&nbsp;{{event.location.country}}</div>
            </div>

        </div>
    `
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