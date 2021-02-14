import { Component, OnInit } from '@angular/core';
import {BuyerService} from './../../buyer.service';
import {ToastService} from 'ng-uikit-pro-standard';

@Component({
	selector: 'app-buyerlogin',
	templateUrl: './buyerlogin.component.html',
	styleUrls: ['./buyerlogin.component.scss']
})
export class BuyerloginComponent implements OnInit {

	constructor(private api:BuyerService,private toast : ToastService) { }
	loginData:any={};
	ngOnInit(): void {
	}
	buyerlogin(){
		this.api.buyerlogin(this.loginData).subscribe(res=>{
			if(res.message=='Login successfully!'){
				localStorage.setItem('token', res.data);
				this.toast.info(res.message,"Success")
			} else 
			if(res.message=='Invalid login credentials!') this.toast.error(res.message,'Error')
		},(err=>{
			this.toast.error(err.message,"Error")
		}))
	}
}
