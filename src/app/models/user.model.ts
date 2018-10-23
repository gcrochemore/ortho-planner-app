/**
 * Classe métier définissant un utilisateur de l'applicqation
 */
export class User {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    accessToken: string;
    profile: string;

    constructor(json?: {}) {
        if (json) {
            for (let prop in json) {
                if (json[prop] != null) {
                    this[prop] = json[prop];
                }
            }
        }

        return this;
    }

}