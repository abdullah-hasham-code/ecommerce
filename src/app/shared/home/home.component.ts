import { Component, OnInit } from '@angular/core';
import { ToastService } from 'ng-uikit-pro-standard'; 
import { MatPaginator } from '@angular/material/paginator'; 
import { MatTableDataSource } from '@angular/material/table'; 
import { Platform } from '@angular/cdk/platform';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/buyer.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(private buyer: BuyerService,private router:Router,private paginator: MatPaginator) { }
	categories: any = {};
	products: any = {};
	allCategories: any = [];
	allProducts: any = [];
	selectedCategories:any=[];
	dataSource = new MatTableDataSource();
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
		})
		this.router.navigateByUrl('/shared/categoryproduct/id')
	}

}
