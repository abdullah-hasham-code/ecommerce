import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerComponent } from './buyer.component';
import { BuyerloginComponent } from './buyerlogin/buyerlogin.component';
import { BuyersignupComponent } from './buyersignup/buyersignup.component';


@NgModule({
  declarations: [BuyerComponent, BuyerloginComponent, BuyersignupComponent],
  imports: [
    CommonModule,
    BuyerRoutingModule
  ]
})
export class BuyerModule { }
