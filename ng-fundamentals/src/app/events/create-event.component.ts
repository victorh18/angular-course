import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventService, IEvent } from "./shared";

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5 }
    .error ::-webkit-input-placeholder { color: #999 }
    .error ::-moz-placeholder { color: #999 }
    .error :-moz-placeholder { color: #999 }
    .error :-ms-input-placeholder { color: #999 }
  `]
})
export class CreateEventComponent implements OnInit {
    event: any
    isDirty = false;
    constructor(private router:Router, private eventService: EventService) {
        
    }
    ngOnInit(): void {
        
    }

    cancel() {
        this.router.navigate(["/events"]);
    }

    saveEvent(formValues) {
        console.log(formValues);
        this.eventService.saveEvent(formValues).subscribe(() => {
            this.router.navigate(["/events"]);
        });
        
    }
}