import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryproductComponent } from './categoryproduct/categoryproduct.component';

import { SharedComponent } from './shared.component';


const routes: Routes = [
  { path: '', component: SharedComponent },
  { path: 'home', component: HomeComponent },
  { path: 'categoryproduct/:key', component: CategoryproductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
