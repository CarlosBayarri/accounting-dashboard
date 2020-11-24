import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeExpenseComponent } from './income-expense/income-expense.component';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { DashboardRoutesModule } from './dashboard-routes.module';
import { IncomeExpenseModule } from './income-expense/income-expense.module';
import { GroupsModule } from './groups/groups.module';

@NgModule({
  declarations: [
    IncomeExpenseComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    ChartsModule,
    FormsModule,
    SharedModule,
    DashboardRoutesModule,
    IncomeExpenseModule,
    GroupsModule
  ]
})
export class DashboardModule { }
