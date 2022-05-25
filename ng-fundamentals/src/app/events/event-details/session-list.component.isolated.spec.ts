import { ISession } from "../shared";
import { SessionListComponent } from "./session-list.component";

describe('Session list component test suite', () => {
    let component: SessionListComponent;
    let mockAuth, mockVote;

    beforeEach(() => {
        component = new SessionListComponent(mockAuth, mockVote);
    })
    
    it("should filter sessions on changes.", () => {
        component.sessions = <ISession[]>[
            { name: "Session A", level: 'intermediate' },
            { name: "Session C", level: 'beginner' },
            { name: "Session B", level: 'intermediate' }
        ];
       // component.
    });

    it("should sort sessions on changes.", () => {

    })

})