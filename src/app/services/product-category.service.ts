import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  categorySet = [];
  private category = new BehaviorSubject<any[]>([]);
  currentCategory = this.category.asObservable();
  constructor() { }
  add_category(data){
    
    this.categorySet.push({id : '111'+data.category_name, category  : data.category_name,status : data.status});
    this.category.next(this.categorySet)
   
  }
 
}
