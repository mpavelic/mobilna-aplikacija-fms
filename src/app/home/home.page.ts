import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LogINService } from '../services/log-in.service';
import { User } from '../models/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor( private router : Router) {

  }
  
  
  openPage(url : string){
    this.router.navigateByUrl(url);
  }
  

}
