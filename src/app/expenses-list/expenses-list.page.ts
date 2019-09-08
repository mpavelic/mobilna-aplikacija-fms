import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Expense } from '../models/expense';
import { LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LogINService } from '../services/log-in.service';
import { ExpensesDetailComponent } from './expenses-detail/expenses-detail.component';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.page.html',
  styleUrls: ['./expenses-list.page.scss'],
})
export class ExpensesListPage implements OnInit {

  constructor(
    private crudServise: CrudService, 
    private loadingController: LoadingController,
    private loginService: LogINService, 
    private router: Router,
    private modalController: ModalController
    ) { }
  listOfExpenses: Array<Expense> = [];
  loadingData = true;
  ngOnInit() {

   

  


  }
  ionViewDidEnter(){
    this.loadData();
  }

  loadData(){
    this.crudServise.getFromDatabaseForLogedInUser("expenses", this.loginService.getUserId()).subscribe(value => {

      this.listOfExpenses = value;
      this.loadingData = false;
    },
      error => {
        console.log(error);

      }
    );
      
  }
  openPage(url: string) {
    this.loadingData = true;
    this.router.navigateByUrl(url);
  }

  async presentModal(expense:Expense) {
    const modal = await this.modalController.create({
      component: ExpensesDetailComponent,
      componentProps: {
        'expense': expense,
      },
      cssClass: 'detail-modal'
  
  
    });
    modal.onDidDismiss().then(value =>{
      this.loadData();
    })
    return await modal.present();
  }
  

}


