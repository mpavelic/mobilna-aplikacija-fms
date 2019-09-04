export class AccountBalance{
    private date : Date;
    private expenses : number;
    private revenues : number;
    private saldo : number;

    constructor(date : Date, expenses : number, revenues : number){
        this.date = date;
        this.expenses = expenses;
        this.revenues = revenues;
    }

    getSaldo(){
        return this.revenues - this.expenses;
    }

}