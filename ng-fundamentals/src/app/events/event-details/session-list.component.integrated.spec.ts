import { DebugElement } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { AuthService } from "src/app/user/auth.service";
import { VoteService } from "../shared";
import { SessionListComponent } from "./session-list.component"

describe("SessionListComponent", () => {
    let mockAuthService,
        mockVoteService,
        fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SessionListComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoteService, useValue: mockVoteService }
            ]
        })

        fixture = TestBed.createComponent(SessionListComponent);
        element = fixture.nativeElement;
        debugEl = fixture.debugElement
    })
    
    describe("initial display", () => {

    })
})