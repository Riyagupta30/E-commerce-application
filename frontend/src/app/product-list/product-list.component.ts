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
        this.productService.addToCart(item.id);     
    }
    
}
