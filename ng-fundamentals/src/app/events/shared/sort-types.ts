import { ISession, Session } from "./event.model";
import * as Utils from '../shared/utils';

export const SESSION_SORT_TYPES = [
    {
        name: "BY_TITLE",
        description: "Title",
        sortFunction: (descSort: boolean) => {
            return Utils.genericSort<ISession>(Utils.getPropertyAsString(new Session(), (s) => s.name), descSort)
        }
    },
    {
        name: "BY_DURATION",
        description: "Duration",
        sortFunction: (descSort: boolean) => {
            return Utils.genericSort<ISession>(Utils.getPropertyAsString(new Session(), (s) => s.duration), descSort)
        }
    },
    {
        name: "BY_POPULARITY",
        description: "Popularity",
        sortFunction: (descSort: boolean) => {
            return sortSessionsByPopularity(descSort);
        }
    }
]

function sortSessionsByPopularity(descSort: boolean) {
    return (firstValue: ISession, secondValue: ISession) => {
        let tempObject: ISession;

        // If the order is descending, flip the objects to invert the comparison
        if (descSort) {
            tempObject = firstValue;
            firstValue = secondValue;
            secondValue = tempObject;
        }

        if (firstValue.voters.length > secondValue.voters.length) {
            return 1;
        } else if (firstValue.voters.length === secondValue.voters.length) {
            return 0;
        }

        return -1
        
    }
}