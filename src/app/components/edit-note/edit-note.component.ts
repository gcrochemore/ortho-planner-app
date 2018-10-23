import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {NoteService} from '../../services/note.service';
import {MatSnackBar} from '@angular/material';
import {Note} from '../../models/note.model';
import * as _ from 'underscore';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
    selector: 'app-edit-note',
    templateUrl: './edit-note.component.html',
    styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

    form: any;
    noteId: number;
    title: string = '';

    constructor(private router: Router,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder,
                private noteService: NoteService,
                private matSnackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.noteId = this.route.snapshot.params['id'];
        this.noteService.get(this.noteId).then((note) => {
            console.log(note);
            this.form.patchValue(note);
        });


        this.title = this.noteId ? 'Edition d\'une note' : 'Ajouter une nouvelle note';

        /*this.form.patchValue({
            id: note.id,
            text: note.text
        });*/

        this.form = this.formBuilder.group({
            content: ['', [
                Validators.required
            ]],
            id: [''],
        });
    }

    saveNote(event) {
        event.preventDefault();
        if (this.form.valid) {
            const data = this.form.getRawValue();
            if (!data.id) {
                this.createNewNote(data);
            } else {
                this.updateNote(data);
            }

            this.form.reset();
        }
    }

    createNewNote(data) {
        console.log(data);
        this.noteService.create(data).then((newNote) => {
            if (newNote instanceof Note) {
                this.matSnackBar.open('La note a bien été enregistrée', '', {
                    duration: 5000,
                    panelClass: ['success-class']
                });
                this.router.navigate(['note/list']);
            } else {
                this.matSnackBar.open('Une erreur est survenue durant l\'enregistrement', '', {
                    duration: 5000,
                    panelClass: ['error-class']
                });
            }

        }).catch((err) => {
            console.log(err);
            this.matSnackBar.open('Une erreur est survenue durant l\'enregistrement', '', {
                duration: 5000,
                panelClass: ['error-class']
            });
        });
    }

    updateNote(data) {
        const note = new Note(data);

        this.noteService.update(note).then((isUpdated) => {
            if (isUpdated) {
                this.matSnackBar.open('La note a bien été mise à jour', '', {
                    duration: 5000,
                    panelClass: ['success-class']
                });
            } else {
                this.matSnackBar.open('Une erreur est survenue durant la mise à jour', '', {
                    duration: 5000,
                    panelClass: ['error-class']
                });
            }
        });
    }

    cancel() {
        this.router.navigate(['note/list']);
    }
}
