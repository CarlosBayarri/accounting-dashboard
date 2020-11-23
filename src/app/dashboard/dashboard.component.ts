import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from '../app.reducer';
import { IncomeexpenseService } from '../services/incomeexpense.service';
import * as incomeExpenseActions from '../income-expense/income-expense.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit, OnDestroy {

  private userSubscription: Subscription;
  private incomeExpenseSubscribe: Subscription;

  constructor(private store: Store<AppState>, private incomeExpenseService: IncomeexpenseService) { }

  ngOnInit() {

    this.userSubscription = this.store.select('user').pipe(filter((user0: any) => user0.user !== null)).subscribe(({user}) => {
      this.incomeExpenseSubscribe = this.incomeExpenseService.initIncomeExpenseListener(user.uid).subscribe(incomeExpenseFirebase => {
        this.store.dispatch(incomeExpenseActions.setItems({items: incomeExpenseFirebase}))
      });
    })

  }

  ngOnDestroy() {
    this.userSubscription?.unsubscribe();
    this.incomeExpenseSubscribe?.unsubscribe();
  }

}
