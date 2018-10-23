import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {routing, appRoutingProviders} from './app.routes';

import {AppComponent} from './app.component';

import {Globals} from './globals';

import {CustomMaterialModule} from '../modules/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConnectionComponent} from './components/connection/connection.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CreateAccountComponent} from './components/create-account/create-account.component';
import {NoteComponent} from './components/note/note.component';
import {NoteService} from './services/note.service';
import {NgxDragarrModule} from '@czeckd/ngx-dragarr';
import {EditNoteComponent} from './components/edit-note/edit-note.component';
import {MenuComponent} from './components/menu/menu.component';
import {OfflineComponent} from './components/offline/offline.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from './environments/environment';
import {OnlineStatusModule} from "ngx-online-status";
import {NoteOfflineService} from "./services/offline/note.offline.service";
import {TokenInterceptor} from "./services/auth/token.interceptor";
import {AuthService} from "./services/auth/auth.service";

@NgModule({
    declarations: [
        AppComponent,
        ConnectionComponent,
        CreateAccountComponent,
        NoteComponent,
        EditNoteComponent,
        MenuComponent,
        OfflineComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        CustomMaterialModule,
        NgxDragarrModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
        OnlineStatusModule

    ],
    providers: [
        appRoutingProviders,
        UserService,
        NoteService,
        Globals,
        NoteOfflineService,
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
