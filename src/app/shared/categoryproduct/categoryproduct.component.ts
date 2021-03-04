import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/buyer.service';

@Component({
  selector: 'app-categoryproduct',
  templateUrl: './categoryproduct.component.html',
  styleUrls: ['./categoryproduct.component.scss']
})
export class CategoryproductComponent implements OnInit {

  constructor(private buyer: BuyerService,private router:Router) { }
	categories: any = {};
	products: any = {};
	allCategories: any = [];
  selectedCategories:any=[];
	allProducts: any = [];
  ngOnInit(): void {
    this.getallcategories();
    this.getallproducts();
  }
  getallcategories() {
		this.buyer.getallcategories(this.categories).subscribe(res => {
			this.allCategories = res.data;
		})
	}
  getallproducts() {
		this.buyer.getallproducts(this.products).subscribe(res => {
			this.allProducts = res.data;
		})
	}
  getproductbycategoryid(id:any){
		this.buyer.getproductbycategoryid({categoryId:id}).subscribe(res=>{
			if(res.message=="No products found!"){
				this.selectedCategories=[];
			}else{
				this.selectedCategories=res.data;
			}
		})
	}
}
