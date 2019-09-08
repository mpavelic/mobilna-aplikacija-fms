import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { LogINService } from '../services/log-in.service';
import { Expense } from '../models/expense';
import { Revenue } from '../models/revenue';
import { AccountBalance } from '../models/account-balance';
import { FormBuilder, Validators } from '@angular/forms';
import { Helpers } from '../helpers/helpers';
import { CategoryService } from '../services/category.service';
import { category } from '../interfaces/categoryInterface';
import { CrudService } from '../services/crud.service';
import { InfoModalComponent } from '../registration/info-modal/info-modal.component';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TypeOfExpenseService } from '../services/type-of-expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})


export class ExpensesPage implements OnInit {

  constructor(private firestore: AngularFirestore,
    private loginService: LogINService,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private crudService: CrudService,
    private modalController: ModalController,
    private router: Router,
    private typeOfExpense : TypeOfExpenseService
  ) { }
  expense: Expense;
  revenue: Revenue;
  accountBalance: AccountBalance;
  selectedCategory: category;
  listOfCategories: Array<category>;
  typeOfExpenseArray : Array<string>;
  calendarVisibe : boolean = false;
  expenseForm = this.fb.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    typeOfExpense : ['',Validators.required],
    date: ['', Validators.required],
    amount: ['', Validators.required]
  });




  ngOnInit() {


    this.listOfCategories = this.categoryService.getListOfDefaultCategories();
    this.typeOfExpenseArray = this.typeOfExpense.getTypeOfExpenses();

    this.expenseForm.controls.typeOfExpense.valueChanges.subscribe(value =>{
      this.calendarVisibe = true;
    })



    // this.firestore.collection("expenses").add(object).then(value =>{
    //   console.log(value);

    // },


  }


  setIonSelectedValue(category: category) {
    this.selectedCategory = category;
  }

  getIonSelectedValue() {
    if (!this.selectedCategory) {
      return this.listOfCategories[0].name;
    }
    return this.selectedCategory.name;
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

