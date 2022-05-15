import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { ISession } from '../shared';
import { VoteService } from '../shared/vote.service';

@Component({
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})

export class SessionListComponent implements OnInit {
    @Input() sessions: ISession[];

    constructor(private authService: AuthService, private voteService: VoteService) { }

    ngOnInit() { }
    
    toggleVote(session: ISession): void {
        this.voteService.toggleVote(session, this.authService.currentUser.userName);
    }

    userHasVoted(session: ISession): boolean {
        return this.voteService.userHasVoted(session, this.authService.currentUser.userName);
    }

    userIsAuthenticated(): boolean {
        return this.authService.isAuthenticated();
    }
}