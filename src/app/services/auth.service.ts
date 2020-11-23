import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from '../app.reducer';
import { User } from '../models/user.model';
import * as actions from '../store/actions';

import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubscription: Subscription;
  private _user: User;

  get user() {
    return {...this._user};
  }
  
  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore, private store: Store<AppState>) { }

  initAuthListener() {
    this.auth.authState.subscribe(fuser => {
      if (fuser) {
        this.userSubscription = this.firestore.doc(`${fuser.uid}/user`).valueChanges().subscribe((fuser2: any) => {
          const user = User.fromFirebase(fuser2);
          this._user = user;
          this.store.dispatch(actions.setUser({user}));
          this.store.dispatch(actions.unSetItems());
        })
      } else {
        this.store.dispatch(actions.unSetUser());
        this.store.dispatch(actions.unSetItems());
        this._user = null;
        if (this.userSubscription) this.userSubscription.unsubscribe();
      }
    })
  }

  loginUser(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  createUser(name: string, email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password).then(fuser => {
      const newUser = new User(fuser.user.uid, name, email);
      return this.firestore.doc(`${fuser.user.uid}/user`).set({...newUser}); // Firebase does not accept clases, only objects
    });
  }
  logOut() {
    return this.auth.signOut();
  }
  isAuth() {
    return this.auth.authState.pipe(
      map(fuse => fuse != null)
    );
  }
}
