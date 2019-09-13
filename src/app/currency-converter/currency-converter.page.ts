import { Component, OnInit } from '@angular/core';
import { CurrencyConversionService } from '../services/currency-conversion.service';
import { FormBuilder, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.page.html',
  styleUrls: ['./currency-converter.page.scss'],
})
export class CurrencyConverterPage implements OnInit {

  constructor(private currencyService: CurrencyConversionService, private formBuilder: FormBuilder) { }
  currencyForm = this.formBuilder.group({
    currentCurrency: ['EUR', Validators.required],
    currentCurrencyValue: [1, Validators.required],
    wantedCurrency: ['AUD', Validators.required]
  });
  listOfCurrency = [];
  listOfWantedCurrency = [];
  loadingData = true;
  result: number;
  loadingWantedData = true;

  ngOnInit() {
    this.fillCurrentCurrencyList(this.currencyForm.controls.currentCurrency.value);
    this.fillListOfWantedCurrency("USD");
    this.convertValue();
    this.currencyForm.controls.currentCurrency.valueChanges.subscribe(value => {
      this.loadingData = true;
      this.fillListOfWantedCurrency(value);
      this.convertValue();
    });
    this.currencyForm.controls.currentCurrencyValue.valueChanges.subscribe(value => {
      this.convertValue();
    });
    this.currencyForm.controls.wantedCurrency.valueChanges.subscribe(value => {
      this.convertValue();
    });
  }

  convertValue() {
    let currentCurrencyName = this.currencyForm.controls.currentCurrency.value;
    let currentCurrencyValue = this.currencyForm.controls.currentCurrencyValue.value;
    let wantedCurrency = this.currencyForm.controls.wantedCurrency.value;

    this.currencyService.getAllCurrencyBasedOn(currentCurrencyName).subscribe(value => {
      this.result = currentCurrencyValue * value[wantedCurrency]

    })
  }

  fillCurrentCurrencyList(selectedItem: string) {
    this.currencyService.getListOfCurrency("USD").subscribe(value => {
      this.listOfCurrency = value;
      this.listOfCurrency.push(selectedItem);
      this.loadingData = false;
    })
  }


  fillListOfWantedCurrency(base: string) {
    this.currencyService.getListOfCurrency(base).subscribe(value => {
      this.listOfWantedCurrency = value;
      this.loadingData = false;
      this.loadingWantedData = false;
    })
  }

}
