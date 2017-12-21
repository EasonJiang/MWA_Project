import { Component, Input, OnInit,OnChanges,ChangeDetectorRef ,SimpleChanges} from '@angular/core';
import { DataServices } from '../services/data.service';
import { slideInDownAnimation } from '../animations';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector:'product-List',
    templateUrl:'./product-list.component.html',
    animations: [ slideInDownAnimation ]
})

export class ProductListComponent implements OnInit,OnChanges {
    @Input() productorList;
    @Input() showIs;
    isShow = true;
    productorsList = [];
    constructor(
        private dataservice:DataServices,
        private changeDetectorRef:ChangeDetectorRef,
        private route: ActivatedRoute,
        private router: Router,
    ){}
     
    ngOnInit(){
        console.log("-----");
        this.dataservice.getAllProducts().subscribe(res => {
            this.productorsList =  res.json();
            console.log("-----"+this.productorsList);
          });
    }

    ngOnChanges(changes: SimpleChanges) {
        this.isShow = this.showIs;
        this.productorsList = this.productorList;
        if(changes['productors'] && changes['productors'].currentValue) {
          console.log(changes['productors'].currentValue);
        }
      }


      gotoRoute(productId){
        this.isShow = false;
        this.router.navigate(['/checkOut', {productId: productId }]);
        console.log("productId:"+productId);
      }
}