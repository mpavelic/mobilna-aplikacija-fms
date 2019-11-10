import { Component, OnInit } from '@angular/core';
import { RevenuesService } from '../services/revenues.service';
import { LogINService } from '../services/log-in.service';
import { Revenue } from '../models/revenue';
import { Expense } from '../models/expense';
import { ExpensesService } from '../services/expenses.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.page.html',
  styleUrls: ['./account-balance.page.scss'],
})
export class AccountBalancePage implements OnInit {
  listOfRevenues: Array<Revenue>;
  loadingRevenues: boolean = true;
  selectedDate: Date;
  listOfExpenses: Array<Expense>;
  loadingExpenses: boolean = true;
  showBalance: boolean = false;
  resultColor: string;
  accountBalance: number = 0;
  constructor(
    private revenueService: RevenuesService,
    private loginService: LogINService,
    private expenseService: ExpensesService,
    private fb: FormBuilder
  ) { }

  accountBalanceForm = this.fb.group({

    date: ['', Validators.required],

  });

  ngOnInit() {
    this.accountBalanceForm.controls.date.valueChanges.subscribe(value => {
      this.accountBalance = this.showMeBalance(value);
      this.showBalance = true;
    })
  }

  ionViewDidEnter() {
    this.loadRevenues();
    this.loadExpenses();

  }

  loadRevenues() {
    this.revenueService.getRevenues(this.loginService.getUserId()).subscribe(value => {

      this.listOfRevenues = value;
      this.loadingRevenues = false;
    },
      error => {
        console.log(error);

      }
    );

  }

  showMeBalance(date: Date) {

    let expenseSum = 0;
    let revenueSum = 0;
    this.selectedDate = new Date(date);

    expenseSum = this.sumValuesFromList(this.listOfExpenses, this.selectedDate);
    revenueSum = this.sumValuesFromList(this.listOfRevenues, this.selectedDate);
    const result = revenueSum - expenseSum;
    if (result >= 0) {
      this.resultColor = 'positive-color';
      return result;
    }
    this.resultColor = 'negative-color';
    return result;

  }


  sumValuesFromList(list: Array<Expense> | Array<Revenue>, selectedDate: Date) {
    let listSum = 0;
    let currentDate = new Date();


    list.forEach(listItem => {
      let itemDate = new Date(listItem.date)

      if (itemDate >= currentDate) {
        if (listItem instanceof Expense) {
          console.log("Expense: " + listItem.name + "Value : " + this.sumFactory(listItem.typeOfExpense, listItem.amount, itemDate, currentDate));

          listSum += this.sumFactory(listItem.typeOfExpense, listItem.amount, itemDate, currentDate)
        }
        if (listItem instanceof Revenue) {
          console.log("Revenue: " + listItem.name + "Value : " + this.sumFactory(listItem.typeOfRevenue, listItem.amount, itemDate, currentDate));

          listSum += this.sumFactory(listItem.typeOfRevenue, listItem.amount, itemDate, currentDate)
        }

      }
    })
    return listSum;
  }

  sumFactory(typeOfItem: string, amount, itemDate, currentDate) {

    let value = typeOfItem.split(' ');

    switch (value[0]) {
      case 'Weekly':
        return this.weeklySum(itemDate, currentDate, amount);
      case 'Daily':
        return this.dailySum(itemDate, currentDate, amount);
      case 'Monthly':
        return this.monthlySum(itemDate, amount);
      case 'Anual':
        return this.anualSum(itemDate, amount);
      default:
        break;
    }
  }

  weeklySum(date1, date2, amount) {


    let weeksBetween = this.calculateWeeksBetween(date1, date2);

    return amount * weeksBetween;
  }

  dailySum(date1, date2, amount) {
    let daysBetween = this.calculateDaysBetween(date1, date2);
    return amount * daysBetween;
  }

  monthlySum(itemDate: Date, amount: number) {
    if (itemDate > this.selectedDate) {
      return 0;
    }
    return amount;
  }

  anualSum(itemDate: Date, amount: number) {
    if (itemDate > this.selectedDate) {
      return 0;
    }
    return amount;
  }



  calculateDaysBetween(date1: Date, date2: Date) {
    let ONE_DAY = 1000 * 60 * 60 * 24;
    let date1_ms = date1.getTime();
    let date2_ms = date2.getTime();
    let difference_ms = Math.abs(date1_ms - date2_ms);
    console.log("day diffrence: " + Math.floor(difference_ms / ONE_DAY));

    return Math.floor(difference_ms / ONE_DAY);
  }

  calculateWeeksBetween(date1: Date, date2: Date) {
    let ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
    let date1_ms = date1.getTime();
    let date2_ms = date2.getTime();
    let difference_ms = Math.abs(date1_ms - date2_ms);
    console.log("Week diffrence: " + Math.floor(difference_ms / ONE_WEEK));

    return Math.floor(difference_ms / ONE_WEEK);
  }

  loadExpenses() {
    this.expenseService.getExpenses(this.loginService.getUserId()).subscribe(value => {

      this.listOfExpenses = value;
      this.loadingExpenses = false;
    },
      error => {
        console.log(error);

      }
    );

  }
}
