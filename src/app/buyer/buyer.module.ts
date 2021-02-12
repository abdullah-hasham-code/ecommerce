import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuyerRoutingModule } from './buyer-routing.module';
import { ToastModule } from 'ng-uikit-pro-standard';
import { BuyerComponent } from './buyer.component';
import { BuyerloginComponent } from './buyerlogin/buyerlogin.component';
import { BuyersignupComponent } from './buyersignup/buyersignup.component';
import { BuyerdashboardComponent } from './buyerdashboard/buyerdashboard.component';


@NgModule({
  declarations: [BuyerComponent, BuyerloginComponent, BuyersignupComponent, BuyerdashboardComponent],
  imports: [
    FormsModule,
    CommonModule,
    ToastModule.forRoot(),
    BuyerRoutingModule
  ]
})
export class BuyerModule { }
