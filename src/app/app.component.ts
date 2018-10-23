import {Component} from '@angular/core';
import {Globals} from './globals';
import {OnlineStatusService, OnlineStatusType} from "ngx-online-status";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(public globals: Globals,
                private onlineStatusService: OnlineStatusService,
                private router: Router,
                public http: HttpClient) {
        this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
            this.globals.status = status;
            if (!this.globals.status) {
                this.router.navigate(['offline']);
            }
        });

    }
}
