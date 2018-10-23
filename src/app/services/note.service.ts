import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Note} from '../models/note.model';
import {NoteOfflineService} from "./offline/note.offline.service";
import {Globals} from "../globals";

@Injectable()
export class NoteService {
    noteUrl: string;

    constructor(private http: HttpClient,
                private globals: Globals,
                private noteOfflineService: NoteOfflineService) {
        this.noteUrl = environment.api.url + environment.api.entities.note;
    }

    public create(data) {
        if (this.globals.status) {
            return this.noteOfflineService.create(data);
        }
        return this.http.post<Note>(this.noteUrl, data).toPromise().then(
            res => {
                if (res) {
                    return new Note(res);
                }

                return false;
            },
            error => {
                return error;
            }
        );
    }

    public get (noteId) {
        if (this.globals.status) {
            return this.noteOfflineService.get(noteId);
        }
        return this.http.get<Note>(this.noteUrl + '/' + noteId).toPromise().then(
            res => {
                if (res) {
                    return new Note(res);
                } else {
                    return false;
                }
            }
        );
    }

    public update(note: Note) {
        if (this.globals.status) {
            return this.noteOfflineService.update(note);
        }
        return this.http.put(this.noteUrl + '/' + note.id, note).toPromise().then(
            res => {
                if (res) {
                    return true;
                } else {
                    return false;
                }
            }
        );
    }

    public delete(noteId) {
        if (this.globals.status) {
            return this.noteOfflineService.delete(noteId);
        }
        return this.http.delete(this.noteUrl + '/' + noteId).toPromise().then(
            res => {
                if (res) {
                    return true;
                } else {
                    return false;
                }
            },
            error => {
                return false;
            }
        );
    }

    public getAll(): Promise<Note[]> {
        if (this.globals.status) {
            return this.noteOfflineService.getAll();
        }

        return this.http.get<Note[]>(this.noteUrl).toPromise().then(
            result => {
              if (result.length) {
                let notes: Note[] = [];
                result.forEach((note) => {
                  notes.push(new Note(note));
                });
                return notes;
              } else {
                return [];
              }
            },
            error => {
                return [];
            }
        );
    }
}
