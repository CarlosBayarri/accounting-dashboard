
export class Product {

    static fromFirebase({id, titile, description, user_owner, price, group_owner, images}) {

        return new Product(id, titile, description, user_owner, price, group_owner, images);
    }

    constructor( public id: string, public title: string, public description: string, public user_owner: string, 
        public price: number, public group_owner: string, public images: Array<string>) {}
}