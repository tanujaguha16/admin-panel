import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../services/product-category.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  category_name = '';
  status = '1';
  constructor( private categoryService : ProductCategoryService) { }
  add_category(event){
    console.log(this.status)
    this.categoryService.add_category(this);
  }
  
  ngOnInit() {
   
  }

}
