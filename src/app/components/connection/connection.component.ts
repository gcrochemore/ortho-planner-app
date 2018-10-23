import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";
import {Globals} from "../../globals";

@Component({
    selector: 'app-connection',
    templateUrl: './connection.component.html',
    styleUrls: ['./connection.component.css']
})

export class ConnectionComponent {
    errorAuthenticate: boolean = false;
    hide: boolean = true;

    loginFormControl = new FormControl('', [
        Validators.required
    ]);

    passwordFormControl = new FormControl('', [
        Validators.required
    ]);

    constructor(private globals: Globals,
                private router: Router,
                private userService: UserService,
                private matSnackBar: MatSnackBar) {
    }

    authenticateUser(event) {
        event.preventDefault();
        let self = this;
        if (this.loginFormControl.valid && this.passwordFormControl.valid) {
            this.userService.authenticate(this.loginFormControl.value, this.passwordFormControl.value).then(
                user => {
                    if (user) {
                        this.globals.currentUser = user;
                        localStorage.setItem('token', user.accessToken);
                        self.router.navigate(['note/list']);
                    } else {
                        this.matSnackBar.open('Nom d\'utilisateur ou mot de passe incorrect', '', {
                            duration: 5000,
                            panelClass: ['error-class']
                        });
                    }
                }
            );
        }
    }


}
