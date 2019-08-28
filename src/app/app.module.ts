import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from '../environments/environment'
import { AngularFireModule } from '@angular/fire/'
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogInPageModule } from './log-in/log-in.module';
import { EmailMessageComponent } from './components/Validation/email-validation-message/email-validation-message.component';
import { OibValidationMessageComponent } from './components/Validation/oib-validation-message/oib-validation-message.component';
import { RequiredValidationMessageComponent } from './components/Validation/required-validation-message/required-validation-message.component';
import { RegistrationPageModule } from './registration/registration.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RegistrationPageModule,
    LogInPageModule,
    SharedModule
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  exports: []

})
export class AppModule { }
