import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'required-validation-message',
  templateUrl: './required-validation-message.component.html',
  styleUrls: ['./required-validation-message.component.scss']
})
export class RequiredValidationMessageComponent implements OnInit {
  @Input() control: any;
  @Input() textIndent: string = '0px';
  @Input() fontSize: string = '15px';
  @Input() atributeName: string = '';
  constructor() { }

  ngOnInit() {
  }

}
