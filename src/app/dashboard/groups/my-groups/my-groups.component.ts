import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Group } from '../../../models/group.model';
import { AppState } from '../../../app.reducer';
import { GroupsService } from '../../../services/groups.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.scss']
})
export class MyGroupsComponent implements OnInit, OnDestroy {

  myGroups: Group[] = [];
  private myGroupsSubscription: Subscription;

  constructor(private store: Store<AppState>, private GroupsService: GroupsService) { }

  ngOnInit() {
    this.myGroupsSubscription = this.store.select('groups').subscribe(({myGroups}) => this.myGroups = myGroups);
  }

  ngOnDestroy() {
    this.myGroupsSubscription.unsubscribe();
  }

}
