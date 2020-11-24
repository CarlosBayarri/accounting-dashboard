export class User {

    static fromFirebase({uid, name, email, users_connected, products_connected, groups_connected}) {

        return new User(uid,name, email, users_connected, products_connected, groups_connected);
    }

    constructor( public uid: string, public name: string, public email: string, public users_connected: Array<string>,
        public products_connected: Array<string>, public groups_connected: Array<string>) {}
}