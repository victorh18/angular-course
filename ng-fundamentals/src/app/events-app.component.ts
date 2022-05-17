import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent implements OnInit {
  title = 'App for tech events';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
      this.authService.checkAuthenticationStatus();
  }
}
