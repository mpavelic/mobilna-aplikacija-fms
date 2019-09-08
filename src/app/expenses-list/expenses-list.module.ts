import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExpensesListPage } from './expenses-list.page';
import { SharedModule } from '../shared/shared.module';
import { ExpensesDetailComponent } from './expenses-detail/expenses-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ExpensesListPage
  }
];

@NgModule({
  entryComponents: [ExpensesDetailComponent],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ExpensesListPage,ExpensesDetailComponent]
})
export class ExpensesListPageModule {}
