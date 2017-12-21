import { Http,RequestOptions } from '@angular/http';
import { Component } from '@angular/core';
import { DataServices } from '../services/data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'check-Out',
    templateUrl: './check-out.component.html'
})

export class CheckOutComponent {
    payments = ['WeChat', 'AliPay'];
    model = { "name": "", "email": "", "payment": "", "phone": "", "account": "" };
    constructor(
        private dataservice: DataServices,
        private route: ActivatedRoute,
        private router: Router,
        private http: Http
    ) { }

    onSubmit() {
        let opts: RequestOptions = new RequestOptions();
        opts.body = this.model;
        this.http.post('/api/save', this.model)
            .subscribe(
            res => {
                console.log(res);
                let result = window.confirm('Payment is sucessful!');
                if(result){
                    this.router.navigate(['/home', {}]);
                }
                
            },
            err => {
                console.log("Error occured");
            }
            );
        
    }
}