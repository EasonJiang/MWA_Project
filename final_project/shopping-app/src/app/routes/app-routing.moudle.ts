import { ProductListComponent } from './../productsList_component/product-list.component';
import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { CheckOutComponent } from '../CheckOut_component/check-out.component';
const appRoutes:Routes = [
    {path:'home',component:ProductListComponent},
    {path:'checkOut',component:CheckOutComponent},
];

@NgModule({
    imports:[
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true, // <-- debugging purposes only
            }
        )
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{}