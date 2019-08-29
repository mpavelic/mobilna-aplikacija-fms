import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss'],
})
export class InfoModalComponent implements OnInit {

  @Input() email: string;
  constructor(private modalCtrl : ModalController, private router : Router) { }

  ngOnInit() {
  }

  closeModal(redirectUrl : string){
    this.modalCtrl.dismiss().then(value => {
      this.router.navigateByUrl(redirectUrl);
    })
  }

}
