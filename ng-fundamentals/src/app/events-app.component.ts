import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <h1>Welcome to the events page!</h1>
    <img src="/assets/images/basic-shield.png" />
  `
})
export class EventsAppComponent {
  title = 'App for tech events';
}
