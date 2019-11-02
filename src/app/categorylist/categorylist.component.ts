import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../services/product-category.service';
@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
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
