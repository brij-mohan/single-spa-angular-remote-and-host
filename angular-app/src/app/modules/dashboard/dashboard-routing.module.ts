import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankBalanceComponent } from './bank-balance/bank-balance.component';

const routes: Routes = [
  {
    path: '',
    component: BankBalanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
