import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../seller.service';
import {ToastService} from 'ng-uikit-pro-standard';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
	selector: 'app-sellerlogin',
	templateUrl: './sellerlogin.component.html',
	styleUrls: ['./sellerlogin.component.scss']
})
export class SellerloginComponent implements OnInit {

	constructor(private formBuilder: FormBuilder,private api: SellerService,private toast : ToastService,private router:Router) { }
	registerForm:any= FormGroup;
    submitted = false;
	loginData:any={};
	ngOnInit(): void {
		this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
	}
	get f() { return this.registerForm.controls; }
    onSubmit() {
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)')
    }
	sellerlogin(){
		this.submitted = true;
		this.api.sellerlogin(this.loginData).subscribe(res=>{
			if(res.message=='Login successfully!'){
				localStorage.setItem('token', res.data);
				localStorage.setItem('detail',res.firstname)
				var token:any = localStorage.getItem("token");
				this.api.checkshopexist({x:token}).subscribe(res=>{
					if(res.message=="No shop found!") this.router.navigateByUrl('seller/createshop');
					else this.router.navigateByUrl('seller/createproduct');
					 
				});
				this.toast.info(res.message,"Success");
			} else 
			if(res.message=='Invalid login credentials!') this.toast.error(res.message,'Error')
		},(err=>{
			this.toast.error(err.message,"Error");
		}))
	}
}
