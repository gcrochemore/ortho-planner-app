/**
 * Classe métier définissant un utilisateur de l'applicqation
 */
import {User} from "./user.model";

export class Note {
    id: number;
    content: string;
    user: User;
    order: number;

    constructor(json: {}) {
        for (let prop in json) {
            if (json[prop] != null) {
                if (prop == 'user') {
                    json[prop] = new User(json[prop]);
                } else {
                    this[prop] = json[prop];
                }

            }
        }
        return this;
    }

}