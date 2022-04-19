import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "event-thumbnail",
    template: `
    <div class="well thumbnail hoverwell">
        <h2>{{event.name}}</h2>
        <div>
            <strong>Time: </strong>
            {{event?.time}} &nbsp;
            <div [ngSwitch]="event?.time" [ngClass]="earlyTimeStyle()">
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
        </div>
        <div><strong>Date: </strong>{{event?.date}}</div>
        <div class="pad-left"><strong>Price: </strong>\${{event?.price}}</div>
        <div *ngIf="event?.location">
            <strong>Location: </strong>
            {{event?.location?.address}},&nbsp;{{event?.location?.city}},&nbsp;{{event?.location?.country}}
        </div>
        <div *ngIf="event?.onlineUrl">
            <strong>Online URL: </strong>
            {{event?.onlineUrl}}
        </div>
        <div class="button-row">
            <div class="col-md-3"><button class="btn btn-primary" (click)="handleClick()">Click Me!</button></div>
            <div class="col-md-3"><button class="btn btn-primary" (click)="logTitle()">Log Me!</button></div>
        </div>
    </div>
    `,
    styles: [`
        .button-row {display: flex; justify-content: space-between; align-items: center; margin-top: 10px}
        .thumbnail { min-height: 280px}
        .pad-left { margin-bottom: 10px; }
        .well div { color: #bbb; }
        .green { color: #009900 !important; }
        .bold { font-weight: bold}
    `]
})

export class EventThumbnailComponent {
    @Input() event:any;
    @Output() eventClick = new EventEmitter();

    handleClick() {
        this.eventClick.emit({name: this.event.name});
    }

    logTitle() {
        console.log(`The ${this.event.name} course was logged.`); 
    }

    earlyTimeStyle() {
        let earlyStart = (this.event?.time === '8:00 am')
        return {
            green: earlyStart,
            bold: earlyStart
        }
    }
}