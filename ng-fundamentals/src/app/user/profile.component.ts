import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from './auth.service';
@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5 }
    .error ::-webkit-input-placeholder { color: #999 }
    .error ::-moz-placeholder { color: #999 }
    .error :-moz-placeholder { color: #999 }
    .error :-ms-input-placeholder { color: #999 }
  `]
})
export class ProfileComponent implements OnInit {
    profileForm: FormGroup;
    firstName: FormControl;
    lastName: FormControl;

    constructor(private router: Router, private authService: AuthService){

    }
    ngOnInit(): void {
        this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required]);

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        })
    }

    validateFirstName(): boolean {
        return this.firstName.valid || !this.firstName.touched;
    }

    validateRequiredField(control: AbstractControl): boolean {
        return (control.valid || control.untouched);
    }

    saveUser(formValues): void {
        if (this.profileForm.invalid) {
            return;
        }
        this.authService.updateUser(formValues.firstName, formValues.lastName);
        this.router.navigate(['events']);
    }

    cancel(): void {
        this.router.navigate(['events']);
    }

    errorMessage(control: AbstractControl): string {
        switch (true) {
            case !!control.errors.pattern:
                return "Must start with a letter"

            case control.errors.required:
                return "Required"

            default:
                return 'default error message'
        }
    }
       
}