import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncomeExpense } from '../../models/income-expense.model';
import { MultiDataSet, Label } from 'ng2-charts';
import { AppStateIncomeExpense } from '../../store/reducers/income-expense.reducers';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent implements OnInit {

  income: number = 0;
  expense: number = 0;

  totalIncome: number = 0;
  totalExpense: number = 0;

  public doughnutChartLabels: Label[] = ['Income', 'Expense'];
  public doughnutChartData: MultiDataSet = [[]];

  constructor(private store: Store<AppStateIncomeExpense>) { }

  createStatistics(items: IncomeExpense[]) {
    this.totalExpense = 0;
    this.totalIncome = 0;
    this.income = 0;
    this.expense = 0;
    
    items.forEach(eachItem => {
      if (eachItem.type === 'income') {
        this.totalIncome += eachItem.quantity;
        this.income ++;
      } else {
        this.totalExpense += eachItem.quantity;
        this.expense ++;
      }
    });

    this.doughnutChartData = [ [this.totalIncome, this.totalExpense] ];
  }

  ngOnInit() {
    this.store.select('incomeExpense').subscribe(({items}) => {
      this.createStatistics(items);
    })
  }

}
