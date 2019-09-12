import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Revenue } from '../models/revenue';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RevenuesService {
  constructor(private crudService: CrudService) { }


  getRevenues(authToken: string) {
    return this.crudService.getFromDatabaseForLogedInUser('revenues', authToken).pipe(map((result) => {
      return result.docs.map(value => {

        let array = { ...{ 'revenueID': value.id }, ...value.data() }
        return new Revenue(array['revenueID'], array['name'], array['category'], array['date'], array['typeOfRevenue'], array['amount'])
      })

    }))
  }

  getListOfDefaultCategories() {
    return [
      { 'id': 1, 'name': 'Salaries and Wages' },
      { 'id': 2, 'name': 'Taxable Pensions and Annuities' },
      { 'id': 3, 'name': 'Partnerships and S-Corporation Net Income' },
      { 'id': 4, 'name': 'Business Net Income' },
      { 'id': 5, 'name': 'Taxable Social Security Benefits' },
      { 'id': 6, 'name': 'Taxable Interest' },
      { 'id': 7, 'name': 'Unemployment Compensation' }

    ]
  }

  
  getTypeOfRevenues() {
    return [
      'Weekly revenue',
      'Daily revenue',
      'Monthly revenue',
      'Anual revenue'
    ]
  }
}
