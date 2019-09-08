import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Expense } from 'src/app/models/expense';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-expenses-detail',
  templateUrl: './expenses-detail.component.html',
  styleUrls: ['./expenses-detail.component.scss'],
})
export class ExpensesDetailComponent implements OnInit {


  @Input() expense: Expense;
  constructor(private crudService: CrudService, private modalCtrl: ModalController) { }

  ngOnInit() {
  }


  delete() {
    this.crudService.deleteFromDatabase("expenses", this.expense.expenseID).then(() => {
      this.modalCtrl.dismiss();
    })
  }
  // closeModal(redirectUrl : string){
  //   this.modalCtrl.dismiss().then(value => {
  //     this.router.navigateByUrl(redirectUrl);
  //   })
  // }
}
