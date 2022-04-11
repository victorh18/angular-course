import { Component, Input } from "@angular/core";

@Component({
    selector: "event-thumbnail",
    template: `
    <div class="well thumbnail hoverwell">
        <h2>{{event.name}}</h2>
        <div><strong>Time: </strong>{{event.time}} &nbsp;</div>
        <div><strong>Date: </strong>{{event.date}}</div>
        <div><strong>Price: </strong>\${{event.price}}</div>
        <div><strong>Location: </strong>{{event.location.place}},&nbsp;{{event.location.city}},&nbsp;{{event.location.country}}</div>
    </div>
    `
})

export class EventThumbnailComponent {
    @Input() event:any
}