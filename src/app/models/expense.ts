export class Expense {
    private name: string;
    private category: string;
    private date: Date;
    private amount: number;



    constructor(name: string, category: string, date: Date, amount: number) {
        this.name = name;
        this.category = category;
        this.date = date;
        this.amount = amount;
    }


    getAmount(){
        return this.amount;
    }



}