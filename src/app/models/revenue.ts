export class Revenue{
    revenueID : string;
    name: string;
    category: string;
    date: Date;
    typeOfRevenue : string;
    amount: number;


    constructor(revenueID: string,name: string, category: string, date: Date, typeOfRevenue : string,amount: number) {
        this.name = name;
        this.category = category;
        this.date = date;
        this.amount = amount;
        this.typeOfRevenue = typeOfRevenue;
        this.revenueID = revenueID;
    }



    getAmount(){
        return this.amount;
    }




}