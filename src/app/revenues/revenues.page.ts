import { Component, OnInit } from '@angular/core';
import { LogINService } from '../services/log-in.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';
import { RevenuesService } from '../services/revenues.service';
import { Revenue } from '../models/revenue';
import { category } from '../interfaces/categoryInterface';

@Component({
  selector: 'app-revenues',
  templateUrl: './revenues.page.html',
  styleUrls: ['./revenues.page.scss'],
})
export class RevenuesPage implements OnInit {

 
  constructor(
    private loginService: LogINService,
    private fb: FormBuilder,
    private crudService: CrudService,
    private router: Router,
    private revenueService : RevenuesService
  ) { }
  revenue: Revenue;
  selectedCategory: category;
  listOfCategories: Array<category>;
  typeOfRevenueArray : Array<string>;
  calendarVisibe : boolean = false;
  dateText : string = '';
  revenueForm = this.fb.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    typeOfRevenue : ['',Validators.required],
    date: ['', Validators.required],
    amount: ['', Validators.required]
  });




  ngOnInit() {


    this.listOfCategories = this.revenueService.getListOfDefaultCategories();
    this.typeOfRevenueArray = this.revenueService.getTypeOfRevenues();

    this.revenueForm.controls.typeOfRevenue.valueChanges.subscribe(value =>{
      this.calendarVisibe = true;
      this.setDateText(value);
        
      
    })

 


  }

  setDateText(value: string){
        if(value === 'Daily expense'){
          this.dateText = "Date end";
          return;
        }
        this.dateText = "Date";
        return;
  }



  isFormValid() {
    return this.revenueForm.valid;
  }
  storeToDatabase() {
    // this.revenueForm.controls.category.setValue(this.selectedCategory);
    this.crudService.addToDatabase("revenues", { ...this.revenueForm.value, ...{ 'uuid': this.loginService.getUserId() } }).then(value => {
      this.router.navigateByUrl("/revenues-list")
    })
  }


}
