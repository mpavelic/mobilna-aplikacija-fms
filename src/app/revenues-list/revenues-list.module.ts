import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RevenuesListPage } from './revenues-list.page';
import { SharedModule } from '../shared/shared.module';
import { RevenuesDetailComponent } from './revenues-detail/revenues-detail.component';

const routes: Routes = [
  {
    path: '',
    component: RevenuesListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents: [RevenuesDetailComponent],

  declarations: [RevenuesListPage,RevenuesDetailComponent]
})
export class RevenuesListPageModule {}
