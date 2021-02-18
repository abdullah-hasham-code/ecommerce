import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../seller.service';
import { ToastService } from 'ng-uikit-pro-standard';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
	selector: 'app-createshop',
	templateUrl: './createshop.component.html',
	styleUrls: ['./createshop.component.scss']
})
export class CreateshopComponent implements OnInit {

	constructor(private file:ApiService, private api: SellerService, private toast: ToastService, private router: Router) { }
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
		let formData = new FormData();
		var files: any = event.target.files;
		var filePath:any;
		if (files.length > 0) {
			var allowedTypes = ['png', 'jpeg','jpg','JPG','JPEG','PNG'];
			var filePathLengthBeforeImages = filePath.length;
			for (let i = 0; i < files.length; i++) {
			  if (allowedTypes.indexOf(files[i].name.split('.').pop()) == -1) { 
				(<HTMLInputElement>document.getElementById('chooseimg')).value = ''; 
				this.toast.error('error', 'Sorry, Only png and jpeg files are allowed!(IN)'); return false; }
			}
		// if (event.target.files && event.target.files[0]) {
		// 	const file = event.target.files[0];
		// 	const reader = new FileReader();
		// 	reader.onload = e => this.imageSrc = reader.result;
		// 	reader.readAsDataURL(file);
		// 	this.api.uploadfile(this.imageSrc).subscribe(res=>{
		// 		console.log(res)
		// 	})
		// }
		}
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
