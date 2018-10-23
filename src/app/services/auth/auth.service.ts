import {Injectable} from '@angular/core';
import tokenNotExpired from 'jwt-decode';

@Injectable()
export class AuthService {
    public getToken(): string {
        return localStorage.getItem('token');
    }

    public isAuthenticated(): boolean {
        const token = this.getToken();
        return tokenNotExpired(null, token);
    }
}
