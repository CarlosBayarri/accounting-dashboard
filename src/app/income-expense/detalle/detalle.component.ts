import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { IncomeExpense } from 'src/app/models/income-expense.model';
import { Subscription } from 'rxjs';
import { IncomeexpenseService } from '../../services/incomeexpense.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit, OnDestroy {

  incomeExpenseItems: IncomeExpense[] = [];
  private incomeExpenseSubscription: Subscription;

  constructor(private store: Store<AppState>, private incomeExpenseService: IncomeexpenseService) { }

  deleteItem(uid: string) {
  this.incomeExpenseService.deleteIncomeExpense(uid).then(() => {
    Swal.fire('Deleted', 'Item deleted', 'success');
  }).catch(err => {
    Swal.fire('Error', err.message, 'error');
  })
  }

  ngOnInit() {
    this.incomeExpenseSubscription = this.store.select('incomeExpense').subscribe(({items}) => this.incomeExpenseItems = items);
  }

  ngOnDestroy() {
    this.incomeExpenseSubscription.unsubscribe();
  }

}
