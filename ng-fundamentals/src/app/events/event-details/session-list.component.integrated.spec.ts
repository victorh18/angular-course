import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { AuthService } from "src/app/user/auth.service";
import { DurationPipe, VoteService } from "../shared";
import { SessionListComponent } from "./session-list.component"

describe("SessionListComponent", () => {
    let mockAuthService,
        mockVoteService,
        fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement;

    beforeEach(() => {
        mockAuthService = { 
            isAuthenticated: () => true, 
            currentUser: { firstName: 'John', lastName: 'Papa'} 
        };

        mockVoteService = { 
            userHasVoted: () => true
        }

        TestBed.configureTestingModule({
            declarations: [
                SessionListComponent,
                DurationPipe
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoteService, useValue: mockVoteService }
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        })

        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        debugEl = fixture.debugElement;
    })
    
    describe("initial display", () => {
        it('should have a correct title', () => {
            const session = {
                id: 1,
                name: "Using Angular 4 Pipes",
                presenter: "Peter Bacon Darwin",
                duration: 1,
                level: "Intermediate",
                abstract: `Learn all about the new pipes in Angular 4, both 
                how to write them, and how to get the new AI CLI to write 
                them for you. Given by the famous PBD, president of Angular 
                University (formerly Oxford University)`,
                voters: ['bradgreen', 'igorminar', 'martinfowler']
            }

            const sessions = [];
            sessions.push(session);

            component.sessions = sessions;
            component.eventId = 1;

            fixture.detectChanges();
            
            expect(element.querySelector("[well-title]").textContent).toContain(session.name);
            expect(debugEl.query(By.css("[well-title]")).nativeElement.textContent).toContain(session.name);
        })
    })
})