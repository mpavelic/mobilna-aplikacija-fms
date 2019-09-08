export class Expense {
    expenseID : string;
    name: string;
    category: string;
    date: Date;
    typeOfExpense : string;
    amount: number;


    constructor(expenseID: string,name: string, category: string, date: Date, typeOfExpense : string,amount: number) {
        this.name = name;
        this.category = category;
        this.date = date;
        this.amount = amount;
        this.typeOfExpense = typeOfExpense;
        this.expenseID = expenseID;
    }


    getAmount() {
        return this.amount;
    }



}