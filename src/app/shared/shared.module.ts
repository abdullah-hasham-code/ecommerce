import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { HomeComponent } from './home/home.component';
import { CategoryproductComponent } from './categoryproduct/categoryproduct.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';


@NgModule({
  declarations: [SharedComponent, HomeComponent, CategoryproductComponent, ProductdetailComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
