import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OibValidationMessageComponent } from '../components/Validation/oib-validation-message/oib-validation-message.component';
import { EmailMessageComponent } from '../components/Validation/email-validation-message/email-validation-message.component';
import { RequiredValidationMessageComponent } from '../components/Validation/required-validation-message/required-validation-message.component';



@NgModule({
  declarations: [OibValidationMessageComponent,EmailMessageComponent,RequiredValidationMessageComponent],
  imports: [
    CommonModule
  ],
  exports : [
    OibValidationMessageComponent,EmailMessageComponent,RequiredValidationMessageComponent
  ]
})
export class SharedModule { }
