import { of } from "rxjs";
import { ISession } from "./event.model";
import { VoteService } from "./vote.service";


describe("VoteService", () => {
    let voteService: VoteService;
    let mockHttp: any;
    let mockToastr: any;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj("mockHttp", ['delete', 'post']);
        mockToastr = jasmine.createSpyObj('mockToastr', ['success', 'warning', 'info', 'error'])

        voteService = new VoteService(mockToastr, mockHttp);
    })

    it('should remove specific user from the list of voters',  () => {
        const session: unknown = { voters: ['Joe', 'John']};
        mockHttp.delete.and.returnValue(of(false));

        voteService.deleteVoter(2, <ISession>session, "John");

        expect((<ISession>session).voters.length).toBe(1);
        expect((<ISession>session).voters[0]).toBe("Joe");
    });

    it('should call http.delete with the proper URL', () => {
        const session = { id:3, voters: ['Joe', 'John']};
        const eventId = 2;
        const userName = "John";

        mockHttp.delete.and.returnValue(of(false));

        voteService.deleteVoter(eventId, <ISession>session, userName);

        expect(mockHttp.delete).toHaveBeenCalledWith(`/api/events/${eventId}/sessions/${session.id}/voters/${userName}`);
    });

    it('should call http.post with the proper parameters when adding a voter.', () => {
        const session = { id:3, voters: ['Joe']};
        const eventId = 2;
        const userName = "John";

        mockHttp.post.and.returnValue(of(false));

        voteService.addVoter(eventId, <ISession>session, userName);

        expect(mockHttp.post).toHaveBeenCalledWith(`/api/events/${eventId}/sessions/${session.id}/voters/${userName}`, {}, jasmine.any(Object));
    });

    it('should show a success notification if the voter was added.', () => {
        const session = { name: "Test Session", id:3, voters: ['Joe']};
        const eventId = 2;
        const userName = "John";

        mockHttp.post.and.returnValue(of(true));

        const successMessage = `You have voted for the "${session.name}" session!`

        voteService.addVoter(eventId, <ISession>session, userName);

        expect(mockToastr.success).toHaveBeenCalledWith(successMessage);
    });

}) 