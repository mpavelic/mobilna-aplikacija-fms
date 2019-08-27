import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Helpers } from '../helpers/helpers';
import { LogINService } from '../services/log-in.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { ModalController } from '@ionic/angular';
import { InfoModalComponent } from './info-modal/info-modal.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  registrationForm = this.fb.group({
    email: ['', [Validators.required,Validators.pattern(Helpers.emailValidationPattern) ]],
    password: ['', Validators.required],
  });
  incorectRegistration = false;
  instructionVisible = false;
  constructor(private fb: FormBuilder, private loginService: LogINService,private modalController: ModalController, private router: Router) { }

  register() {
    this.presentModal();
  }

  ngOnInit() {
 
  }

  isFormValid() {
    return this.registrationForm.valid;
  }


  openPage(url:string){
    this.router.navigateByUrl(url);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: InfoModalComponent,
      componentProps: {
        'email' : this.registrationForm.controls.email.value()
      }
    });
    return await modal.present();
  }


}
