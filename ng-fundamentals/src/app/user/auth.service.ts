import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
    updateUser(firstName: any, lastName: any) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

    currentUser: IUser

    login(userName: string, password: string){
        this.currentUser = {
            id: 1,
            firstName: 'John',
            lastName: 'Papa',
            userName: 'john-papa'
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}