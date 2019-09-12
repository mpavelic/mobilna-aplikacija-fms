import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { LogINService } from '../services/log-in.service';
import { Router } from '@angular/router';
import { RevenuesService } from '../services/revenues.service';
import { Revenue } from '../models/revenue';
import { RevenuesDetailComponent } from './revenues-detail/revenues-detail.component';

@Component({
  selector: 'app-revenues-list',
  templateUrl: './revenues-list.page.html',
  styleUrls: ['./revenues-list.page.scss'],
})
export class RevenuesListPage implements OnInit {

  constructor(
    private loginService: LogINService, 
    private router: Router,
    private modalController: ModalController,
    private revenueService : RevenuesService
    ) { }
  listOfRevenues: Array<Revenue> = [];
  loadingData = true;
  ngOnInit() {

   

  


  }
  ionViewDidEnter(){
    this.loadData();
  }

  loadData(){
    this.revenueService.getRevenues( this.loginService.getUserId()).subscribe(value => {

      this.listOfRevenues = value;
      this.loadingData = false;
    },
      error => {
        console.log(error);

      }
    );
      
  }
  openPage(url: string) {
    this.loadingData = true;
    this.router.navigateByUrl(url);
  }

  async presentModal(revenue:Revenue) {
    const modal = await this.modalController.create({
      component: RevenuesDetailComponent,
      componentProps: {
        'revenue': revenue,
      },
      cssClass: 'detail-modal'
  
  
    });
    modal.onDidDismiss().then(value =>{
      this.loadData();
    })
    return await modal.present();
  }
}
