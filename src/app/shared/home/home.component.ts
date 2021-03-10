import { Component, OnInit } from '@angular/core';
import { ToastService } from 'ng-uikit-pro-standard'; ; 
import { ActivatedRoute, Router } from '@angular/router';
import { BuyerService } from 'src/app/buyer.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(private buyer: BuyerService,private router:Router) { }
	detail:any=null;
	productName:any='';
	products: any = {};
	totalRecords:number =0;
	page:number =1
	allCategories: any = [];
	allProducts: any = [];
	selectedCategories:any=[];
	ngOnInit(): void {
		this.getallcategories();
		this.getallproducts();
		this.detail = localStorage.getItem('detail');
	}
	getallcategories() {
		this.buyer.getallcategories({}).subscribe(res => {
			this.allCategories = res.data;
		},(err)=>{
			console.log(err)
		})
	}
	getallproducts() {
		this.buyer.getallproducts(this.products).subscribe(res => {
			this.allProducts = res.data;
			this.totalRecords=res.data.length
		})
	}
	getproduct(id:any){
		this.buyer.getproduct({categoryId:id}).subscribe(res=>{
		})
		
		this.router.navigateByUrl('/shared/categoryproduct/'+id);
	}
	getproductbyproductid(id:any){
		this.buyer.getproduct({productId:id}).subscribe(res=>{
			this.router.navigateByUrl('/shared/productdetail/'+id)
		})
	}
	searchProduct(){
		this.router.navigateByUrl('/shared/searchproducts/'+this.productName);
	}

}
