import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateAccountComponent} from './components/create-account/create-account.component';
import {ConnectionComponent} from './components/connection/connection.component';
import {NoteComponent} from './components/note/note.component';
import {EditNoteComponent} from './components/edit-note/edit-note.component';
import {OfflineComponent} from "./components/offline/offline.component";

const appRoutes: Routes = [
    {path: 'login', component: ConnectionComponent},
    {path: 'create-account', component: CreateAccountComponent},
    {path: 'note/list', component: NoteComponent},
    {path: 'note', component: EditNoteComponent},
    {path: 'note/:id', component: EditNoteComponent},
    {path: 'offline', component: OfflineComponent},
    {path: '**', redirectTo: 'login'},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
