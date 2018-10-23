import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Globals} from '../../globals';
import {Note} from '../../models/note.model';
import {User} from "../../models/user.model";


@Injectable()
export class NoteOfflineService {
    dbName: string;

    constructor(private http: HttpClient,
                private globals: Globals) {
        this.dbName = environment.offLineDatabaseName;
    }

    public create(data) {
        const promise = new Promise((resolve, reject) => {
            if (true) {
                resolve(new Note({}));
            } /*else {
                reject('erreur');
            }*/
        });

        return promise;
    }

    public get (noteId) {
        const promise = new Promise((resolve, reject) => {
            if (true) {
                resolve(new Note({}));
            } /*else {
                reject('erreur');
            }*/
        });

        return promise;
    }

    public update(note: Note) {
        const promise = new Promise((resolve, reject) => {
            if (true) {
                resolve(new Note({}));
            } /*else {
                reject('erreur');
            }*/
        });

        return promise;
    }

    public delete(noteId) {
        const promise = new Promise((resolve, reject) => {
            if (true) {
                resolve(true);
            } /*else {
                reject('erreur');
            }*/
        });

        return promise;
    }

    public getAll (): Promise<Note[]> {
        const promise = new Promise<Note[]>((resolve, reject) => {
            if (true) {
                resolve([]);
            } /*else {
                reject('erreur');
            }*/
        });

        return promise;
    }
}
