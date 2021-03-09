import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuyerService } from 'src/app/buyer.service';

@Component({
  selector: 'app-searchproducts',
  templateUrl: './searchproducts.component.html',
  styleUrls: ['./searchproducts.component.scss']
})
export class SearchproductsComponent implements OnInit {

  constructor(private buyer: BuyerService,private router:Router,private route:ActivatedRoute) { }
  productName='';
  searchedproduct:any=[];
  allCategories: any = [];
  activeroute:any=JSON.parse(JSON.stringify(this.route.params))._value.key;
  ngOnInit(): void {
    this.productName=JSON.parse(JSON.stringify(this.route.params))._value.key;
    this.getallcategories();
    this.getproductbyName();

  }
  getallcategories() {
		this.buyer.getallcategories({}).subscribe(res => {
			this.allCategories = res.data;
		})
	}
  getproductbyName() {
		this.buyer.getproduct({ productName: this.productName }).subscribe(res => {
			this.searchedproduct = res.data;
		})
	}
  getProductbySearch(){
    this.router.navigateByUrl('/shared/searchproducts/'+this.productName);
    this.getproductbyName();
  }
}
