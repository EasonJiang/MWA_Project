import { DataServices } from './services/data.service';
import { Component, Input, OnChanges, SimpleChanges, OnInit, Pipe } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  constructor(private dataservice: DataServices) { }
  categorys;
  productors = [];
  isShow = false;
  showIs = true;
  ngOnInit() {
    this.dataservice.getAllCategory().subscribe(res => {
      this.categorys = res.json();
      console.log(res.json());
    });

    this.chooesCategory(1);
  }

  chooesCategory(category) {
    this.isShow = true;
    this.dataservice.getAllProductsByCategoryId(category.categoryId).subscribe(res => {
      this.productors = res.json();
    });
  }
}
