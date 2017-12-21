import { ProductListComponent } from './productsList_component/product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DataServices} from './services/data.service'
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {OrderBy} from "./utils/pipe"
import { AppRoutingModule } from './routes/app-routing.moudle';
import { CheckOutComponent } from './CheckOut_component/check-out.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    OrderBy,
    CheckOutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
