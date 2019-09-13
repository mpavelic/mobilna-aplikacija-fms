import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {

  constructor(private httpClient: HttpClient) { }

  getAllCurrencyBasedOn(base: string) {
  return this.getFromCurrencyEndpoint(base).pipe(map(value =>{
      return value['rates'];
    }))
  }

  getFromCurrencyEndpoint(base:string){
    return this.httpClient.get("https://api.exchangeratesapi.io/latest?base=" + base);
  }

  getListOfCurrency(base : string){
    return this.getFromCurrencyEndpoint(base).pipe(map(value=>{
      return Object.keys(value['rates']);

    }))
  }



}
