import { Component, OnInit } from '@angular/core';
import { LogINService } from '../services/log-in.service';
import { Expense } from '../models/expense';
import { Revenue } from '../models/revenue';
import { AccountBalance } from '../models/account-balance';
import { FormBuilder, Validators } from '@angular/forms';
import { category } from '../interfaces/categoryInterface';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { ExpensesService } from '../services/expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})


export class ExpensesPage implements OnInit {

  constructor(
    private loginService: LogINService,
    private fb: FormBuilder,
    private crudService: CrudService,
    private router: Router,
    private expenseService : ExpensesService
  ) { }
  expense: Expense;
  revenue: Revenue;
  accountBalance: AccountBalance;
  selectedCategory: category;
  listOfCategories: Array<category>;
  typeOfExpenseArray : Array<string>;
  calendarVisibe : boolean = false;
  dateText : string = '';
  expenseForm = this.fb.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    typeOfExpense : ['',Validators.required],
    date: ['', Validators.required],
    amount: ['', Validators.required]
  });




  ngOnInit() {


    this.listOfCategories = this.expenseService.getListOfDefaultCategories();
    this.typeOfExpenseArray = this.expenseService.getTypeOfExpenses();

    this.expenseForm.controls.typeOfExpense.valueChanges.subscribe(value =>{
      this.calendarVisibe = true;
      this.setDateText(value);
        
      
    })

 


  }

  setDateText(value: string){
        if(value === 'Daily expense'){
          this.dateText = "Date end";
          return;
        }
        this.dateText = "Date";
        return;
  }



  isFormValid() {
    return this.expenseForm.valid;
  }
  storeToDatabase() {
    // this.expenseForm.controls.category.setValue(this.selectedCategory);
    this.crudService.addToDatabase("expenses", { ...this.expenseForm.value, ...{ 'uuid': this.loginService.getUserId() } }).then(value => {
      this.router.navigateByUrl("/expenses-list")
    })
  }




  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: InfoModalComponent,
  //     componentProps: {
  //       'email': this.expenseForm.controls.name.value
  //     },
  //     cssClass: 'info-modal'


  //   });
  //   return await modal.present();
  // }

}

