import { Injectable } from '@angular/core';
import { LogINService } from './log-in.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private loginService: LogINService, private firestore: AngularFirestore) {
  }

  async addToDatabase(collection: string, object: any) {
    return this.firestore.collection(collection).add(object);
  }

  async deleteFromDatabase(collection: string, documentID: string) {
    return this.firestore.collection(collection).doc(documentID).delete();
  }


  async getFromDatabase(collection: string) {
    let array = [];
    this.firestore.collection(collection).get().subscribe(value => {
      value.docs.map(doc => {
        array.push(doc.data());

      })
    })
    return array;
  }

}
