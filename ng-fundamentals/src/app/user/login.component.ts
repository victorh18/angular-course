import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { Toastr, TOASTR_TOKEN } from "../events";
import { AuthService } from "./auth.service";

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px}
    `]
})
export class LoginComponent {
    userName
    password
    mouseOnLoginButton

    constructor(
        private authService: AuthService, 
        private router:Router,
        @Inject(TOASTR_TOKEN) private toastrService: Toastr 
    ) {

    }

    login(formData) {
        this.authService.login(formData.userName, formData.password).subscribe(v => {
            if (!v) {
                this.toastrService.error('Invalid credentials, please try again.', "Login Error");
                return
            }

            this.router.navigate(["events"]);
        });
    }

    cancel() {
        this.router.navigate(["events"]);
    }
}