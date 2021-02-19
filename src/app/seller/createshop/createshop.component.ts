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

	constructor(private file: ApiService, private api: SellerService, private toast: ToastService, private router: Router) { }
	shopData: any = {
		shopName: "",
		shopDescription: "",
		shopCategory: "",
		shopCity: "",
		shopFor: "",
		shopUrl: "",
		shopLogo:""
	};
	fileName: any;
	ext: any;
	isFileUploading: any;
	isFileUploaded: any;
	isRequire: any;
	imagesInProcess = false;
	showProcessingLoader = false;
	firstTimeUploading = false;
	filePath: any = [];
	ngOnInit(): void {
	}
	createShop() {
		console.log(this.shopData)
		this.api.createshop(this.shopData).subscribe(res => {
			if (res.message == 'Your shop has been created successfully!') {
				this.router.navigateByUrl('seller/createproduct')
			}
		})
	}
	uploadFile(event: any, type: any) {
		let formData = new FormData();
		var files: any = event.target.files;
		console.log(event.target.files)
		if (files.length > 0) {
			var allowedTypes = ['png', 'jpeg', 'jpg', 'JPG', 'JPEG', 'PNG'];
			formData = new FormData();
			formData.append("file", files[0]);
			console.log(formData)
			this.api.uploadfile(formData).subscribe(res => {
				if(res.fileUrl!='' && res.fileUrl!=null && res.fileUrl!=undefined){
					this.shopData.shopLogo = res.fileUrl;
				}
			}, (err) => {
				console.log('Internal server error, please try again later');
			});
		};
	};
}
