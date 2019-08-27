import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'email-validation-message',
  templateUrl: './email-validation-message.component.html',
  styleUrls: ['./email-validation-message.component.scss']
})
export class EmailMessageComponent {

  @Input() control: any;
  @Input() textIndent: string = '0px';
  @Input() fontSize: string = '15px';
  constructor() { }

}
