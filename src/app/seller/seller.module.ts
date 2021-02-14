import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SellerRoutingModule } from './seller-routing.module';
import { ToastModule } from 'ng-uikit-pro-standard';
import { SellerComponent } from './seller.component';
import { SellersignupComponent } from './sellersignup/sellersignup.component';
import { SellerloginComponent } from './sellerlogin/sellerlogin.component';
import { CreateshopComponent } from './createshop/createshop.component';
import { CreateproductComponent } from './createproduct/createproduct.component';


@NgModule({
  declarations: [SellerComponent, SellersignupComponent, SellerloginComponent, CreateshopComponent, CreateproductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule.forRoot(),
    SellerRoutingModule
  ]
})
export class SellerModule { }
