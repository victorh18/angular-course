import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    userName
    password

    constructor(private authService: AuthService, private router:Router) {

    }

    login(formData) {
        this.authService.login(formData.userName, formData.password);
        this.router.navigate(["events"]);
        
    }

    cancel() {
        this.router.navigate(["events"]);
    }
}