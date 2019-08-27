import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class LogINService {

  constructor(private fireAuth: AngularFireAuth ) {
    
  }

  async createAccount(user: User) {
    const tempUser = await this.fireAuth.auth.createUserWithEmailAndPassword(user.mail, user.password);
    console.log(tempUser);

  }

  async logIn(user: User){
    const tempUser = await this.fireAuth.auth.signInWithEmailAndPassword(user.mail, user.password);
    console.log(tempUser);
  }

  async logOut(user: User){
    const tempUser = await this.fireAuth.auth.signOut();
    console.log(tempUser);
  }

  getCurrentUser(){
    console.log(this.fireAuth.auth.currentUser);
  }

}
