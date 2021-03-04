import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatTableModule } from '@angular/material/table'; 
import { SharedComponent } from './shared.component';
import { HomeComponent } from './home/home.component';
import { CategoryproductComponent } from './categoryproduct/categoryproduct.component';


@NgModule({
  declarations: [SharedComponent, HomeComponent, CategoryproductComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatTableModule,  
    MatPaginatorModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
