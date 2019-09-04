import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.page.html',
  styleUrls: ['./expenses-list.page.scss'],
})
export class ExpensesListPage implements OnInit {

  constructor(private crudServise : CrudService) { }

  ngOnInit() {
    this.crudServise.getFromDatabase("expenses-list").then(value =>{
      console.log(value);
      
    })
  }

}
