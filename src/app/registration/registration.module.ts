import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistrationPage } from './registration.page';
import { SharedModule } from '../shared/shared.module';
import { InfoModalComponent } from './info-modal/info-modal.component';


const routes: Routes = [
  {
    path: '',
    component: RegistrationPage
  }
];

@NgModule({
  entryComponents: [InfoModalComponent],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  
  declarations: [RegistrationPage,InfoModalComponent]
})
export class RegistrationPageModule {}
