import { Inject, Injectable } from "@angular/core";
import { ISession } from "./event.model";
import { Toastr, TOASTR_TOKEN } from "./toastr.service";

@Injectable()
export class VoteService {
    constructor(
        @Inject(TOASTR_TOKEN) private toastrService: Toastr
    ) {

    }

    toggleVote(session: ISession, userName: string) {
        if (this.userHasVoted(session, userName)) {
            this.deleteVoter(session, userName);
        } else {
            this.addVoter(session, userName);
        }
    }

    userHasVoted(session: ISession, userName: string) {
        return session.voters.includes(userName);
    }

    addVoter(session: ISession, userName: string) {
        session.voters.push(userName);
        this.toastrService.success(`You have voted for the "${session.name}" session!`);
    }

    deleteVoter(session: ISession, userName: string) {
        let newVoters = session.voters.filter(v => v !== userName);
        session.voters = newVoters;
        this.toastrService.success(`You have removed your vote for the "${session.name}" session!`);
    }
}