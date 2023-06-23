import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
    _products: any = [];
    _cart: any = [];
    id = '';
    productsSub: any;
    cartSub: any;
    constructor() {
      this.productsSub = new BehaviorSubject<any[]>(this._products);
      this.cartSub = new BehaviorSubject<any[]>(this._cart); 
    }

    fetchProducts() {
        const items = [
          {
            "id": 1,
            "name": "Course name",
            "price": 40,
            "inventory": 1,
            "description": 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
          },
          {
            "id": 2,
            "name": "Course name two",
            "price": 40,
            "inventory": 1,
            "description": 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
          },
          {
            "id": 3,
            "name": "Course name three",
            "price": 40,
            "inventory": 1,
            "description": 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
          },
          {
            "id": 4,
            "name": "Course name four",
            "price": 40,
            "inventory": 1,
            "description": 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
          },
          {
            "id": 5,
            "name": "Course name five",
            "price": 40,
            "inventory": 1,
            "description": 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
          },
        ];
        this._products = [...items];
        console.log("this._prodcuts", this._products);
        this.productsSub.next([...this._products])
    }

    getProducts() {
        return this.productsSub.asObservable();
    }

    getCart() {
      return this.cartSub.asObservable();
    }

    addToCart(id : any) {
      console.log("id", id);
        const product = this.findItemInProducts(id);
        console.log("productttt", product);
        if(product.length !== 0) {
            if(this.findItemInCart(id).length) {
              this.removeFromCart(id);
            }
            else {
              console.log("hello");
              this._cart.push(product[0]);
              console.log("this._cart", this._cart);
            }
            this.cartSub.next([...this._cart]);
        }
    }

    removeFromCart(id : any) { 
          if(this.findItemInCart(id).length) {
            const item = this.findItemInCart(id)[0];
            const index = this._cart.indexOf(item);
            this._cart.splice(index, 1);
          }
          this.cartSub.next([...this._cart]);
    }

    findItemInCart(id : any) {
        const item = this._cart.filter((ele:any) => (ele.id === id));
        return item;
    }

    findItemInProducts(id : any) {
        console.log("iddddddddddddddd", id);
        const item = this._products.filter((ele:any) => (ele.id === id));
        console.log(":::::::::::::", item);
        return item;    
    }

}
