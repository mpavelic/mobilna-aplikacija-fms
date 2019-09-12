import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Expense } from 'src/app/models/expense';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-expenses-detail',
  templateUrl: './expenses-detail.component.html',
  styleUrls: ['./expenses-detail.component.scss'],
})
export class ExpensesDetailComponent implements OnInit {


  @Input() expense: Expense;
  dateText: string = '';
  constructor(private crudService: CrudService, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.setDateText(this.expense.typeOfExpense);
  }

  delete() {
    this.crudService.deleteFromDatabase("expenses", this.expense.expenseID).then(() => {
      this.modalCtrl.dismiss();
    })
  }

  setDateText(value: string) {
    if (value === 'Daily expense') {
      this.dateText = "Date end";
      return;
    }
    this.dateText = "Date";
    return;
  }
}
