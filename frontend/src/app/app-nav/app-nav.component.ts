import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service'; 

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})

export class AppNavComponent {
   cart: any = [];
   constructor( private productService: ProductsService) {}

      ngOnInit() {
        this.productService.getCart().subscribe((data: any) => {
            this.cart = [...data];
       })
}

}