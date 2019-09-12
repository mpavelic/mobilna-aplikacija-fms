import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { map } from 'rxjs/operators';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private crudService: CrudService) { }

  getExpenses(authToken: string) {
    return this.crudService.getFromDatabaseForLogedInUser('expenses', authToken).pipe(map((result) => {
      return result.docs.map(value => {

        let array = { ...{ 'expenseID': value.id }, ...value.data() }
        return new Expense(array['expenseID'], array['name'], array['category'], array['date'], array['typeOfExpense'], array['amount'])
      })

    }))
  }

  getListOfDefaultCategories() {
    return [
      { 'id': 1, 'name': 'Education' },
      { 'id': 2, 'name': 'Entertainment' },
      { 'id': 3, 'name': 'Personal Care' },
      { 'id': 4, 'name': 'Health & Fitness (was healthcare)' },
      { 'id': 5, 'name': 'Kids' },
      { 'id': 6, 'name': 'Food & Dining' },
      { 'id': 7, 'name': 'Gifts & Donations' },
      { 'id': 8, 'name': 'Investments' },
      { 'id': 9, 'name': 'Bills & Utilities' },
      { 'id': 10, 'name': 'Auto & Transport' },
      { 'id': 11, 'name': 'Travel' },
      { 'id': 12, 'name': 'Fees & Charges' },
      { 'id': 13, 'name': 'Business Services' },
      { 'id': 14, 'name': 'Taxes' },
    ]
  }

  
  getTypeOfExpenses() {
    return [
      'Weekly expense',
      'Daily expense',
      'Monthly expense',
      'Anual expense'
    ]
  }
}
