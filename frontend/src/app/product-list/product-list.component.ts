import { Component, OnInit} from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products : any = [];
  constructor(private productService: ProductsService) { }

    ngOnInit() {
      this.productService.fetchProducts();
        this.productService.getProducts().subscribe((data: any) => {
           this.products = [...data];
      });
    }

    addItemToCart(item: any) {
      console.log("ssssssssssss", item);
        return this.productService.addToCart(item.id);     
    }
    
    itemInCart(item: any) {
      return this.productService.findItemInCart(item.id);
    }

}
