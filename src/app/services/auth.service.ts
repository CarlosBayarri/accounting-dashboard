import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from '../app.reducer';
import { User } from '../models/user.model';
import * as authActions from '../auth/auth.actions';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubscription: Subscription;

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore, private store: Store<AppState>) { }

  initAuthListener() {
    this.auth.authState.subscribe(fuser => {
      if (fuser) {
        this.userSubscription = this.firestore.doc(`${fuser.uid}/user`).valueChanges().subscribe((fuser2: any) => {
          const user = User.fromFirebase(fuser2);
          this.store.dispatch(authActions.setUser({user}))
        })
      } else {
        this.store.dispatch(authActions.unSetUser());
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
