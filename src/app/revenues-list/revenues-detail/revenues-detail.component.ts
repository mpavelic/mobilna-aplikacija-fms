import { Component, OnInit, Input } from '@angular/core';
import { Revenue } from 'src/app/models/revenue';
import { CrudService } from 'src/app/services/crud.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-revenues-detail',
  templateUrl: './revenues-detail.component.html',
  styleUrls: ['./revenues-detail.component.scss'],
})
export class RevenuesDetailComponent implements OnInit {

  @Input() revenue: Revenue;
  dateText: string = '';
  constructor(private crudService: CrudService, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.setDateText(this.revenue.typeOfRevenue);
  }

  delete() {
    this.crudService.deleteFromDatabase("revenues", this.revenue.revenueID).then(() => {
      this.modalCtrl.dismiss();
    })
  }

  setDateText(value: string) {
    if (value === 'Daily revenue') {
      this.dateText = "Date end";
      return;
    }
    this.dateText = "Date";
    return;
  }

}
