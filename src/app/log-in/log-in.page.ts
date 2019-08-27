import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { LogINService } from '../services/log-in.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  logInForm = this.fb.group({
    email: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
    password: ['',Validators.required],
  });

  constructor(private fb : FormBuilder, private loginService : LogINService, private router : Router) { }

  logIn(){
    this.loginService.logIn(new User(this.logInForm.controls.email.value,this.logInForm.controls.password.value)).then()
    this.router.navigateByUrl('/options-page')
  }

  ngOnInit() {
  }

  isFormValid(){
    return this.logInForm.valid;
  }

  getValidationMessage(control : FormControl){
    if(control.errors.required){
      return 'Please enter a valid '
    }
    if(control.errors.pattern){
      return 'Please enter a valid email adress'
    }
  }


  getRequiredValidationMessage(control : FormControl){
    return control.errors.required ? 'Please enter a valid email adress' : '';
  }
}
