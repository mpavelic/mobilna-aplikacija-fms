import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class LogINService {

  constructor(private fireAuth: AngularFireAuth) {

  }

  async createAccount(user: User) {
    return await this.fireAuth.auth.createUserWithEmailAndPassword(user.mail, user.password);

  }

  getCurrentUser() {
    return this.fireAuth.auth.currentUser
  }

  async logIn(user: User) {
    await this.fireAuth.auth.signInWithEmailAndPassword(user.mail, user.password);
  }

  async logOut() {
    await this.fireAuth.auth.signOut();
  }

  async sentVerivicationEmail() {
    await this.getCurrentUser().sendEmailVerification();
  }

  async resetPassword(mail: string) {
    await this.fireAuth.auth.sendPasswordResetEmail(mail);
  }

  async CreateUserWithVerification(email: string, password: string) {
    let tempUser = new User(email, password);
    this.createAccount(tempUser).then(() => {
      this.logIn(tempUser).then(() => {
        this.sentVerivicationEmail();
      }, error => {
        console.error(error);


      })

    }, error => {
      console.error(error);


    })
  }

}
