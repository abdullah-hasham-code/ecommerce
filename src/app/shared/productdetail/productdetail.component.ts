import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/buyer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-productdetail',
	templateUrl: './productdetail.component.html',
	styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

	constructor(private buyer: BuyerService, private router: Router, private route: ActivatedRoute) { }
	productId = '';
	product: any = {};
	reviewDetail: any = [];
	suggestedProduct: any = [];
	totalReview = '';
	ngOnInit(): void {
		this.productId = JSON.parse(JSON.stringify(this.route.params))["_value"]["key"];
		//one more method for get data from route below commented
		// console.log(JSON.parse(JSON.stringify(this.route.params))._value.key);
		this.getproductbyproductid(this.productId);
		this.getproductreviews(this.productId);
	}
	getproductbyproductid(id: any) {
		this.buyer.getproduct({ productId: id }).subscribe(res => {
			this.product = res.data[0];
			this.getsuugestedproduct(this.product.shopId);
			this.router.navigateByUrl('/shared/productdetail/' + id);
		})
	}
	getproductreviews(id: any) {
		this.buyer.getproductreviews({ productId: id }).subscribe(res => {
			this.reviewDetail = res.data;
			this.totalReview = res.count;
		})
	}
	getsuugestedproduct(shopId: any) {
		this.buyer.getproduct({ shopId: shopId }).subscribe(res => {
			this.suggestedProduct = res.data;
		})
	}
}
