import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStatePartners } from 'src/app/store/reducers/partners.reducers';
import { Partner } from '../../../models/partner.model';
import * as actions from '../../../store/actions';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {


  partners: Partner[];
  loading: boolean = false;
  error: any;

  constructor(private store: Store<AppStatePartners>) { }

  ngOnInit(): void {
    this.store.select('partners').subscribe( response => {
      this.partners = response['users']; // Force from external api data model
      this.loading  = response?.loading;
      this.error    = response?.error;
    });

    this.store.dispatch( actions.loadPartners() );

  }

}
