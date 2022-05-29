import { Component, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { ISession } from '../shared';
import { restrictWords } from '../shared/custom-validators';

@Component({
    selector: 'create-session',
    templateUrl: 'create-session.component.html',
    styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input, .error select, .error textarea { background-color: #E3C3C5 }
    .error ::-webkit-input-placeholder { color: #999 }
    .error ::-moz-placeholder { color: #999 }
    .error :-moz-placeholder { color: #999 }
    .error :-ms-input-placeholder { color: #999 }
  `]
})

export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession = new EventEmitter();
    @Output() cancelNewSession = new EventEmitter();

    newSessionForm: FormGroup;

    sessionName: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    constructor() { 

    }

    ngOnInit() {
        this.sessionName = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictWords(['foo', 'bar'])]);

        this.newSessionForm = new FormGroup({
            sessionName: this.sessionName,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
     }
     
     saveSession(data) {
         const session: ISession = {
            id: undefined,
            name: data.sessionName,
            duration: data.duration,
            level: data.level,
            presenter: data.presenter,
            abstract: data.abstract,
            voters: []
        }

        this.saveNewSession.emit(session);        
     }

     errorMessage(control: AbstractControl) {
         switch (true) {
             case !!control?.errors?.required:
                return 'Required';

            case !!control?.errors?.maxlength:
                return 'Cannot exceed 400 characters';

            case !!control?.errors?.restrictWords:
                return 'Cannot say: ' + control?.errors?.restrictWords;

            default:
         }
     }

     showError = (control: AbstractControl) => (control.invalid && control.touched);

     cancel() {
         this.cancelNewSession.emit();
     }
}