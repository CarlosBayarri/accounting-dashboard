import { Routes } from '@angular/router';
import { EstadisticaComponent } from '../income-expense/estadistica/estadistica.component';
import { IncomeExpenseComponent } from '../income-expense/income-expense.component';
import { DetalleComponent } from '../income-expense/detalle/detalle.component';



export const dashboardRoutes: Routes = [

 { path: '', component: EstadisticaComponent },
 { path: 'payments', component: IncomeExpenseComponent },
 { path: 'detail', component: DetalleComponent },

];
