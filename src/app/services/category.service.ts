import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  getListOfDefaultCategories(){
    return [
        {'id':1,'name':'Education'},
        {'id':2,'name':'Entertainment'},
        {'id':3,'name':'Personal Care'},
        {'id':4,'name':'Health & Fitness (was healthcare)'},
        {'id':5,'name':'Kids'},
        {'id':6,'name':'Food & Dining'},
        {'id':7,'name':'Gifts & Donations'},
        {'id':8,'name':'Investments'},
        {'id':9,'name':'Bills & Utilities'},
        {'id':10,'name':'Auto & Transport'},
        {'id':11,'name':'Travel'},
        {'id':12,'name':'Fees & Charges'},
        {'id':13,'name':'Business Services'},
        {'id':14,'name':'Taxes'},
    ]
}
}

