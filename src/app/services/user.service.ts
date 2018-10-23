import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {User} from '../models/user.model';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {

    }

    public authenticate(login: string, password: string) {
        const url = environment.api.url + environment.api.entities.user.authenticate;
        const data = {
            login: login,
            password: password
        };

        return this.http.post<User>(url, data).toPromise().then(
            res => {
                if (res) {
                    return new User(res);
                } else {
                    return null;
                }
            },
            error => {
                return null;
            }
        );
    }

    public register(data) {
        const url = environment.api.url + environment.api.entities.user.register;

        return this.http.post<User>(url, data).toPromise().then(
            res => {
                if (res) {
                    return new User(res);
                } else {
                    return null;
                }
            },
            error => {
                return error.error;
            }
        );
    }
}
