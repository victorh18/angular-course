import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { TouchSequence } from "selenium-webdriver";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
    currentUser: IUser;

    constructor(private http: HttpClient) {

    }

    updateUser(firstName: any, lastName: any) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

    login(userName: string, password: string){
        const loginData = { username: userName, password: password }
        const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})}

       return this.http.post('/api/login', loginData, options)
            .pipe(tap(data => this.currentUser = <IUser>data['user']))
            .pipe(catchError(this.handleError('login', false)))
        
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {
        this.http.get('/api/currentIdentity')
            .pipe(tap(data => {
                console.log(data);
                
                if (data instanceof Object) {
                    this.currentUser = <IUser>data;
                }
            })).subscribe(data => console.log(data)
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(`an error with ${operation} has occurred: `, error);
          return of(result as T);
        }
      }
}