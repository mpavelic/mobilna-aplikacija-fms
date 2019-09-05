export class AccountBalance{
     date : Date;
     expenses : number;
     revenues : number;
     saldo : number;

    constructor(date : Date, expenses : number, revenues : number){
        this.date = date;
        this.expenses = expenses;
        this.revenues = revenues;
    }

    getSaldo(){
        return this.revenues - this.expenses;
    }

}