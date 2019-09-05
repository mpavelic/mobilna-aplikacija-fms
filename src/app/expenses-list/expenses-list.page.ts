import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Expense } from '../models/expense';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.page.html',
  styleUrls: ['./expenses-list.page.scss'],
})
export class ExpensesListPage implements OnInit {

  constructor(private crudServise: CrudService, private loadingController: LoadingController) { }
  listOfExpenses: Array<Expense> = [];
  loadingData = true;
  ngOnInit() {
    this.crudServise.getFromDatabase("expenses").then(value => {

      this.listOfExpenses = value;
      this.loadingData = false;
    },
      error => {
        console.log(error);

      }
    );


  }



}


