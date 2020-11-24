import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from '../app.reducer';
import { Group } from '../models/group.model';
import { AuthService } from './auth.service';
import * as actions from '../store/actions';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private firestore: AngularFirestore, private authService: AuthService, private store: Store<AppState>) { }

  createGroup(group: Group) {
    return this.firestore.firestore.collection('groups').add({...group});
  }

  initMyGroupsListener(uid: string) {
    return this.firestore.collection(`groups`, ref => ref.where("users", "array-contains", uid)).snapshotChanges().pipe(
      map(snapshot => snapshot.map(doc =>  ({uid: doc.payload.doc.id, ...doc.payload.doc.data() as any}) ))
    );
  }

  initGroupsListener() {
    return this.firestore.doc(`groups`).valueChanges().subscribe((groups: any) => {
      this.store.dispatch(actions.setGroups({groups}));
      this.store.dispatch(actions.unSetGroups());
    })
  }

  deleteGroup(uid: string) {
    return this.firestore.doc(`groups/${uid}`).delete();
  }
}
