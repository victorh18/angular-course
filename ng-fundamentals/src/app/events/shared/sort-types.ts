import { ISession } from "./event.model";

export const SESSION_SORT_TYPES = [
    {
        name: "BY_TITLE",
        description: "By Title",
        sortFunction: (descSort: boolean) => {
            if (descSort) {
                return sortSessionByNameDesc();
            }

            return sortSessionByNameAsc();
        }
    }
]
// TODO: simplify this
function sortSessionByNameDesc() {
    return (s1: ISession, s2: ISession) => {
        if (s2.name > s1.name) {
            return 1;
        } else if (s2.name === s1.name) {
            return 0;
        } else {
            return -1;
        }
    }
}

function sortSessionByNameAsc() {
    return (s1: ISession, s2: ISession) => {
        if (s1.name > s2.name) {
            return 1;
        } else if (s2.name === s1.name) {
            return 0;
        } else {
            return -1;
        }
    }
}