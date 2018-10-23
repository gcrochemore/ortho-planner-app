import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {PasswordValidation} from './password-validation';
import {MatSnackBar} from "@angular/material";
import {User} from "../../models/user.model";


@Component({
    selector: 'app-create-account',
    templateUrl: './create-account.component.html',
    styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

    form: FormGroup;
    userIsRegistered: boolean = false;

    constructor(private userService: UserService,
                formBuilder: FormBuilder,
                private matSnackBar: MatSnackBar) {

        this.form = formBuilder.group({
                email: ['', [
                    Validators.email,
                    Validators.required,
                ]],

                login: ['', [
                    Validators.required
                ]],

                firstName: ['', [
                    Validators.required
                ]],
                lastName: ['', [
                    Validators.required
                ]],
                password: ['', Validators.required],
                confirmPassword: ['', Validators.required]
            },
            {
                validator: PasswordValidation.MatchPassword
            });
    }

    createAccount(event): void {
        event.preventDefault();
        if (this.form.valid) {
            const data = this.form.getRawValue();
            this.userService.register(data).then((response) => {
                if (response instanceof User) {
                    this.userIsRegistered = true;
                } else if (response) {

                    this.matSnackBar.open(response.error, '', {
                        duration: 5000,
                        panelClass: ['error-class']
                    });
                }

            });
        }
    }

}
