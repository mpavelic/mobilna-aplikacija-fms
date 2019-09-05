export class Revenue{
     name : string;
     category : string;
     date : Date;
     amount : number;

    constructor(name: string, category : string, date : Date, amount : number){
        this.name = name;
        this.category = category;
        this.date = date;
        this.amount = amount;
    }



    getAmount(){
        return this.amount;
    }




}