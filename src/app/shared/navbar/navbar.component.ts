import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducer';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit, OnDestroy {

  username: string;
  userSubscription: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.userSubscription = this.store.select('user').pipe(filter(({user}) => user !== null)).subscribe(({user}) => {
      this.username = user.name;
    })
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
