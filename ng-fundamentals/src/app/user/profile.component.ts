import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './auth.service';
@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
    profileForm: FormGroup
    constructor(private router: Router, private authService: AuthService){

    }
    ngOnInit(): void {
        let firstName = new FormControl(this.authService.currentUser.firstName);
        let lastName = new FormControl(this.authService.currentUser.lastName);

        this.profileForm = new FormGroup({
            firstName,
            lastName
        })
    }


    saveUser(formValues) {
        this.authService.updateUser(formValues.firstName, formValues.lastName);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
       
}