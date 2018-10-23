import { Injectable } from '@angular/core';
import {User} from './models/user.model';
import {OnlineStatusType} from 'ngx-online-status';

@Injectable()
export class Globals {
    currentUser: User;
    status: OnlineStatusType = 0;
}
