import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../seller.service';
import { ToastService } from 'ng-uikit-pro-standard';
import { Router } from '@angular/router';

@Component({
	selector: 'app-createshop',
	templateUrl: './createshop.component.html',
	styleUrls: ['./createshop.component.scss']
})
export class CreateshopComponent implements OnInit {

	constructor(private api: SellerService, private toast: ToastService, private router: Router) { }
	shopData: any = {
		shopName: "",
		shopDescription: "",
		shopCategory: "",
		shopCity: "",
		shopFor: "",
		shopUrl: "",
		filename: ""
	};
	imageSrc: any;
	ngOnInit(): void {
	}
	readURL(event: any) {
		if (event.target.files && event.target.files[0]) {
			const file = event.target.files[0];
			const reader = new FileReader();
			reader.onload = e => this.imageSrc = reader.result;
			reader.readAsDataURL(file);
			console.log(this.imageSrc)
		}
		this.api.upload(this.imageSrc).subscribe(res => {
			console.log(this.imageSrc)
		})
	}
	createShop() {
		console.log(this.imageSrc)
		this.api.createshop(this.shopData).subscribe(res => {
			if (res.status == 403) {
				// this.router.navigateByUrl('')
			}
		})
	}
}
