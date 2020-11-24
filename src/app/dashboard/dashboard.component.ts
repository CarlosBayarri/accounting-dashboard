import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from '../app.reducer';
import { IncomeexpenseService } from '../services/incomeexpense.service';
import * as actions from '../store/actions';
import { GroupsService } from '../services/groups.service';
import { Group } from '../models/group.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit, OnDestroy {

  private userSubscription: Subscription;
  private incomeExpenseSubscribe: Subscription;
  private myGroupsSubscribe: Subscription;

  constructor(private store: Store<AppState>, private incomeExpenseService: IncomeexpenseService, public groupService: GroupsService) { }

  ngOnInit() {

    this.userSubscription = this.store.select('user').pipe(filter((user0: any) => user0.user !== null)).subscribe(({user}) => {
      this.incomeExpenseSubscribe = this.incomeExpenseService.initIncomeExpenseListener(user.uid).subscribe(incomeExpenseFirebase => {
        this.store.dispatch(actions.setItems({items: incomeExpenseFirebase}))
      });
      this.myGroupsSubscribe = this.groupService.initMyGroupsListener(user.uid).subscribe(groups => {
        this.store.dispatch(actions.setMyGroups({groups: groups}));
      });
      //this.myGroupsSubscribe = this.groupService.initGroupsListener();
    })

  }

  ngOnDestroy() {
    this.userSubscription?.unsubscribe();
    this.incomeExpenseSubscribe?.unsubscribe();
    this.myGroupsSubscribe?.unsubscribe();
  }

}

