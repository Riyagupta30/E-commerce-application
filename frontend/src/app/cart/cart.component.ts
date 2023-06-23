import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
    cart : any = [];
    cartTotal = 0;
    constructor(private productService: ProductsService) {}

    ngOnInit() {
        this.productService.getCart().subscribe((data: any) => {
          this.cart = [...data];
          this.cartTotal = this.cart.reduce((acc : any, cur: any) => acc + Number(cur.price), 0);
          console.log("this.cart", this.cartTotal);
     });
    }

    removeItemFromCart(item: any) {
      this.productService.removeFromCart(item.id)
    }
}
