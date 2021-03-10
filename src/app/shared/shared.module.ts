import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { SharedComponent } from './shared.component';
import { HomeComponent } from './home/home.component';
import { CategoryproductComponent } from './categoryproduct/categoryproduct.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { SearchproductsComponent } from './searchproducts/searchproducts.component';


@NgModule({
  declarations: [SharedComponent, HomeComponent, CategoryproductComponent, ProductdetailComponent, SearchproductsComponent],
  imports: [
    FormsModule,
    CommonModule,
    NgxPaginationModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
