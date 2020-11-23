import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeExpenseOrderByPipe } from '../pipes/income-expense-order-by.pipe';
import { DetalleComponent } from './detalle/detalle.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { IncomeExpenseComponent } from './income-expense.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { DashboardRoutesModule } from '../dashboard/dashboard-routes.module';
import { StoreModule } from '@ngrx/store';
import { incomeExpenseReducer } from '../store/reducers/income-expense.reducers';
import { PartnersComponent } from './partners/partners.component';
import { partnersReducer } from '../store/reducers/partners.reducers';

@NgModule({
  declarations: [
    DashboardComponent,
    IncomeExpenseComponent,
    EstadisticaComponent,
    DetalleComponent,
    IncomeExpenseOrderByPipe,
    PartnersComponent
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
    StoreModule.forFeature('incomeExpense', incomeExpenseReducer),
    StoreModule.forFeature('partners', partnersReducer)
  ],
  exports: [
    IncomeExpenseOrderByPipe
  ],
})
export class IncomeExpenseModule { }
