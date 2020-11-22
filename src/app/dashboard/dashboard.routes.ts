import { Routes } from '@angular/router';
import { EstadisticaComponent } from '../ingreso-egreso/estadistica/estadistica.component';
import { IngresoEgresoComponent } from '../ingreso-egreso/ingreso-egreso.component';
import { DetalleComponent } from '../ingreso-egreso/detalle/detalle.component';



export const dashboardRoutes: Routes = [

 { path: '', component: EstadisticaComponent },
 { path: 'payments', component: IngresoEgresoComponent },
 { path: 'detail', component: DetalleComponent },

];