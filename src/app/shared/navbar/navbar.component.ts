import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducer';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  username: string;
  userSubscription: Subscription;
  activeLink: string = 'home';
  isScrolling: boolean = false;

  constructor(private store: Store<AppState>, private AuthService: AuthService, private router: Router) { }

  logOut() {
    this.AuthService.logOut().then(() => {
      this.router.navigate(['/login']);
    })
  }
  
  ngOnInit() {
    this.userSubscription = this.store.select('user').pipe(filter(({user}) => user !== null)).subscribe(({user}) => {
      this.username = user.name;
    })
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  @HostListener('body:scroll', ['$event'])
  onScroll(event) {
    if (event.srcElement.scrollTop > 62) {
      this.isScrolling = true;
    } else {
      this.isScrolling = false;

    }
  }
  
}
