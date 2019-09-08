import { Injectable } from '@angular/core';
import { LogINService } from './log-in.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private loginService: LogINService, private firestore: AngularFirestore) {
  }

  async addToDatabase(collection: string, object: any) {
    await this.firestore.collection(collection).add(object);
  }

  async deleteFromDatabase(collection: string, documentID: string) {
    return this.firestore.collection(collection).doc(documentID).delete();
  }


  async getAllFromDatabase(collection: string) {
    let array = [];
    this.firestore.collection(collection).get().subscribe(value => {
      value.docs.map(doc => {
        array.push(doc.data());

      })
    })
    return array;
  }

  getFromDatabaseForLogedInUser(collection: string, authToken: string) {
    let query = this.firestore.collection(collection, ref => ref.where('uuid', '==', authToken));

    return query.get().pipe(map((result) => {
      return result.docs.map(value => {

        let array = { ...{ 'expenseID': value.id }, ...value.data() }
        return new Expense(array['expenseID'], array['name'], array['category'], array['date'], array['typeOfExpense'], array['amount'])
      })

    }))
  }


}
