import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})

export class MainPagePage implements OnInit {

  constructor(private router : Router) { }

  mainPageItems = [
    { "icon": "cart", "routerLink": "/expenses-list", "title": "Expenses"},
    { "icon": "card", "routerLink": "/revenues-list", "title": "Revenues"},
    { "icon": "calendar", "routerLink": "/account-balance", "title": "Account Balance"},
    { "icon": "calculator", "routerLink": "/currency-converter", "title": "Currency Converter"},


  ]

  ngOnInit() {
  }

  openPage(url : string){
    this.router.navigateByUrl(url);
  }
  
}
