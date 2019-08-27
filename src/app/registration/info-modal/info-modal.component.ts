import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss'],
})
export class InfoModalComponent implements OnInit {

  constructor(private navParams: NavParams) { }

  ngOnInit() {
    console.log(this.navParams.get('email'));

  }
  @Input() email: string;

}
