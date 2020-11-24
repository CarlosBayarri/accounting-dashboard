import { IncomeExpense } from './income-expense.model';

export class Group {

    static fromFirebase({id, titile, description, users, incomeExpense, products, savings}) {

        return new Group(id, titile, description, users, incomeExpense, products, savings);
    }

    constructor( public id: string, public title: string, public description: string, public users: Array<string>, 
        public incomeExpense: Array<IncomeExpense>, public products: Array<string>, public savings: Array<IncomeExpense>) {}
}