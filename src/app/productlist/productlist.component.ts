import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../services/product-category.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})


export class ProductlistComponent implements OnInit {
  categories = [];
  teachDS: any[] = [];
  
  displayedColumns: string[] = ['id', 'category','status'];
 
  constructor(private categoryService : ProductCategoryService ) { }

  ngOnInit() {
    this.getCategory()
    
  }
 getCategory(){
  this.categoryService.currentCategory.subscribe(categories => {
    this.categories = categories
    this.teachDS = [...this.categories];
  })
  
}


}
