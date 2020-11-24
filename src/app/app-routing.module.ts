import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { 
        path: '',
        canLoad: [ AuthGuard ],
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    { path: '**', redirectTo: '' }
];


@NgModule({

    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {}
