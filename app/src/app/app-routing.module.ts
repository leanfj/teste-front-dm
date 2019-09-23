import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteInfoComponent } from './cliente-info/cliente-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'api/clientes/:id',
    component: ClienteInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
