import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncomeexpenseService } from '../../services/incomeexpense.service';
import { IncomeExpense } from '../../models/income-expense.model';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import * as actions from '../../store/actions';
import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-income-expense',
  templateUrl: './income-expense.component.html',
  styles: []
})
export class IncomeExpenseComponent implements OnInit, OnDestroy {

  incomeForm: FormGroup;
  loading: boolean = false;
  loadingSubscription: Subscription;

  constructor(private fb: FormBuilder, private IncomeexpenseService: IncomeexpenseService, private store: Store<AppState>) { }

  save() {
    if (this.incomeForm.invalid) return;
    const {description, quantity, type} = this.incomeForm.value;
    const incomeExpense = new IncomeExpense(description, quantity, type);
    delete incomeExpense.uid;
    this.store.dispatch(actions.isLoading());
    this.IncomeexpenseService.createIncomeExpense(incomeExpense).then(() => {
      Swal.fire('Registry created', description, 'success');
      this.store.dispatch(actions.stopLoading());
      this.incomeForm.reset();
    }).catch(err => {
      this.store.dispatch(actions.stopLoading());
      Swal.fire('Error', err, 'error');
    });
  }
  ngOnInit() {

    this.loadingSubscription = this.store.select('ui').subscribe(({isLoading}) => this.loading = isLoading);
    this.incomeForm = this.fb.group({
      description: ['', Validators.required],
      quantity: [null, Validators.required],
      type: [null, Validators.required]
    })
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}
