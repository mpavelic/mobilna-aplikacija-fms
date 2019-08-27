import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { LogINService } from '../services/log-in.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Helpers } from '../helpers/helpers';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  logInForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(Helpers.emailValidationPattern)]],
    password: ['', Validators.required],
  });
  incorectLogin = false;
  instructionVisible = false;
  constructor(private fb: FormBuilder, private loginService: LogINService, private router: Router) { }

  logIn() {

    this.loginService.logIn(new User(this.logInForm.controls.email.value, this.logInForm.controls.password.value)).then(value => {
      this.router.navigateByUrl('/options-page')

    }, error => {
      this.incorectLogin = true;

    })
  }

  ngOnInit() {

  }

  isFormValid() {
    return this.logInForm.valid;
  }



  openPage(url: string) {
    this.router.navigateByUrl(url);
  }



  resetPass(mail: string) {
    if (!this.logInForm.controls.email.valid) {
      this.instructionVisible = true;
      return false;
    }
    this.loginService.resetPassword(this.logInForm.controls.email.value);
    return;
  }

}
