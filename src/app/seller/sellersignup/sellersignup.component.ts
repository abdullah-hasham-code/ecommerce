import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../seller.service';


@Component({
	selector: 'app-sellersignup',
	templateUrl: './sellersignup.component.html',
	styleUrls: ['./sellersignup.component.scss']
})
export class SellersignupComponent implements OnInit {

	constructor(private api: SellerService) { }
	sellerData: any = {};
	ngOnInit(): void {
	}
	sellersignup() {
		this.api.sellersignup(this.sellerData).subscribe(res => {

		})
	}
}
