import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../services/product-category.service';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';  
  
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  categorylist = [];
  regiForm: FormGroup;  
  constructor(private fb: FormBuilder,private productCategoryService : ProductCategoryService) { 
    this.regiForm = fb.group({  
      'product' : [null, Validators.required],  
      'price' : [null, Validators.required],  
      'quantity' : [null, Validators.required],  
      'prod_category' : [null, Validators.required],  
     
    });  
  }
 
  ngOnInit() {
    this.productCategoryService.currentCategory.subscribe((category)=>this.categorylist = category)
  }

}
