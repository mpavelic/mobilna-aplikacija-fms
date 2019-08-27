import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-oib-validation-message',
  templateUrl: './oib-validation-message.component.html',
  styleUrls: ['./oib-validation-message.component.scss']
})
export class OibValidationMessageComponent implements OnInit {

  constructor() { }
  @Input() control: FormControl;
  @Input() textIndent: string = '0px';
  @Input() fontSize: string = '15px';


  ngOnInit() {

  }

}
