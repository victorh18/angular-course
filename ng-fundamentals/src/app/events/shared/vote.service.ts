import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Session } from "protractor";
import { ISession } from "./event.model";
import { Toastr, TOASTR_TOKEN } from "./toastr.service";

@Injectable()
export class VoteService {
    constructor(
        @Inject(TOASTR_TOKEN) private toastrService: Toastr,
        private http: HttpClient
    ) {

    }

    toggleVote(eventId: number, session: ISession, userName: string) {
        if (this.userHasVoted(session, userName)) {
            this.deleteVoter(eventId, session, userName);
        } else {
            this.addVoter(eventId, session, userName);
        }
    }

    userHasVoted(session: ISession, userName: string) {
        return session.voters.includes(userName);
        
    }

    addVoter(eventId: number, session: ISession, userName: string) {
        session.voters.push(userName);

        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`
        const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})}

        return this.http.post(url, {}, options).subscribe(e => 
            this.toastrService.success(`You have voted for the "${session.name}" session!`));

    }

    deleteVoter(eventId: number, session: ISession, userName: string) {
        let newVoters = session.voters.filter(v => v !== userName);
        session.voters = newVoters;

        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`
        const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})}

        return this.http.delete(url, options).subscribe(e => 
            this.toastrService.success(`You have removed your vote for the "${session.name}" session!`));

    }
}