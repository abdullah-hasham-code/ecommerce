import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellersignupComponent } from './sellersignup/sellersignup.component';
import { SellerloginComponent } from './sellerlogin/sellerlogin.component';
import { CreateshopComponent } from './createshop/createshop.component';
import { SellerComponent } from './seller.component';
import { CreateproductComponent } from './createproduct/createproduct.component';

const routes: Routes = [
  { path: '', component: SellerComponent },
  {path:'sellersignup',component:SellersignupComponent},
  {path:'sellerlogin',component:SellerloginComponent},
  {path:'createshop',component:CreateshopComponent},
  {path:'createproduct',component:CreateproductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
