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
    private crudService : CrudService,
    private modalController : ModalController,
    private router : Router
  ) { }
  expense: Expense;
  revenue: Revenue;
  accountBalance: AccountBalance;
  selectedCategory : category;
  listOfCategories: Array<category>;
  expenseForm = this.fb.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    date: ['', Validators.required],
    amount: ['', Validators.required]
  });


  

  ngOnInit() {
    this.expense = new Expense("Food", "Dayli expenses", new Date(), 1200);
    this.revenue = new Revenue("Food", "Dayli expenses", new Date(), 600);
    this.accountBalance = new AccountBalance(new Date(), this.expense.getAmount(), this.revenue.getAmount());
    this.listOfCategories = this.categoryService.getListOfDefaultCategories();
    
    console.log(this.accountBalance.getSaldo());

    



    // this.firestore.collection("expenses").add(object).then(value =>{
    //   console.log(value);

    // },


  }


  setIonSelectedValue(category : category){
    this.selectedCategory = category;
  }

  getIonSelectedValue(){
    if(!this.selectedCategory){
      return this.listOfCategories[0].name;
    }
    return this.selectedCategory.name;
  }

  isFormValid(){
    return this.expenseForm.valid;
  }
  storeToDatabase(){
    // this.expenseForm.controls.category.setValue(this.selectedCategory);
    this.crudService.addToDatabase("expenses",this.expenseForm.value).then(value=>{
      this.router.navigateByUrl("/expenses-list")
    })
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: InfoModalComponent,
      componentProps: {
        'email': this.expenseForm.controls.name.value
      },
      cssClass: 'info-modal'
  
  
    });
    return await modal.present();
  }
  
}

