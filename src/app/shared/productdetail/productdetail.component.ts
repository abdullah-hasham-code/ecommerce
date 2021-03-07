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
	productDetail: any = [];
	reviewDetail: any = [];
	suggestedProduct: any = [];
	totalReview = '';
	shopId='';
	ngOnInit(): void {
		this.productId = JSON.parse(JSON.stringify(this.route.params))["_value"]["key"];
		this.getproductbyproductid(this.productId);
		this.getproductreviews(this.productId);
		this.getsuugestedproduct();
	}
	getproductbyproductid(id: any) {
		this.buyer.getproduct({ productId: id }).subscribe(res => {
			this.productDetail = res.data;
			this.router.navigateByUrl('/shared/productdetail/' + id)
		})
	}
	getproductreviews(id: any) {
		this.buyer.getproductreviews({ productId: id }).subscribe(res => {
			this.reviewDetail = res.data;
			this.totalReview = res.count;
		})
	}
	getsuugestedproduct() {
		this.buyer.getproduct( this.shopId ).subscribe(res => {
			this.suggestedProduct = res.data;
		})
	}
}
