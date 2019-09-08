import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeOfExpenseService {

  constructor() { }

  getTypeOfExpenses() {
    return [
      'Weekly expense',
      "Dayli expense",
      "Monthly expense",
      "Anual expense"
    ]
  }
}
