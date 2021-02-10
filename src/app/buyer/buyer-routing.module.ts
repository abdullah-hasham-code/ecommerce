import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyerComponent } from './buyer.component';
import { BuyerloginComponent } from './buyerlogin/buyerlogin.component';
import { BuyersignupComponent } from './buyersignup/buyersignup.component';

const routes: Routes = [
  { path: '', component: BuyerComponent },
  {path:'buyerlogin',component:BuyerloginComponent},
  {path:'buyersignup',component:BuyersignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
