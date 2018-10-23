import {Component, OnInit} from '@angular/core';
import {NoteService} from '../../services/note.service';
import {Note} from '../../models/note.model';
import {MatSnackBar} from '@angular/material';
import {NgxDragarrModule} from '@czeckd/ngx-dragarr';
import {Router} from "@angular/router";


import * as _ from 'underscore';


@Component({
    selector: 'app-note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

    notes: Note[] = [];
    id: number = 0;

    constructor(private noteService: NoteService,
                private matSnackBar: MatSnackBar,
                private router: Router) {
    }

    ngOnInit() {
        this.noteService.getAll().then(notes => {
            this.notes = notes;
        });
    }

    editNote(note) {
        this.router.navigate(['note', note.id]);
    }

    deleteNote(noteId) {
        this.noteService.delete(noteId).then((isDeleted) => {
            if (isDeleted) {
                this.notes = _.reject(this.notes, function (note) {
                    return note.id == noteId;
                });
                this.matSnackBar.open('La note a bien été supprimée', '', {
                    duration: 5000,
                    panelClass: ['error-class']
                });
            } else {
                this.matSnackBar.open('Une erreur est survenue durant la suppression', '', {
                    duration: 5000,
                    panelClass: ['error-class']
                });
            }
        });
    }

    onDrop(event) {
        console.log('drop', event);
    }
}
