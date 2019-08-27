import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LogInPage } from './log-in.page';
import { OibValidationMessageComponent } from '../components/Validation/oib-validation-message/oib-validation-message.component';
import { EmailMessageComponent } from '../components/Validation/email-validation-message/email-validation-message.component';
import { RequiredValidationMessageComponent } from '../components/Validation/required-validation-message/required-validation-message.component';

const routes: Routes = [
  {
    path: '',
    component: LogInPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule

  ],
  declarations: [LogInPage,OibValidationMessageComponent,EmailMessageComponent,RequiredValidationMessageComponent]
})
export class LogInPageModule {}
