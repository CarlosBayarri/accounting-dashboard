import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { IncomeExpense } from '../models/income-expense.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IncomeexpenseService {

  constructor(private firestore: AngularFirestore, private authService: AuthService) { }

  createIncomeExpense(incomeExpense: IncomeExpense) {
    return this.firestore.firestore.doc(`${this.authService.user.uid}/income-expense`).collection('items').add({...incomeExpense});
  }

  initIncomeExpenseListener(uid: string) {
    return this.firestore.collection(`${uid}/income-expense/items`).snapshotChanges().pipe(
      map(snapshot => snapshot.map(doc =>  ({uid: doc.payload.doc.id, ...doc.payload.doc.data() as any}) ))
    );
  }

  deleteIncomeExpense(uid: string) {
    return this.firestore.doc(`${this.authService.user.uid}/income-expense/items/${uid}`).delete();
  }
}
