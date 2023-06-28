import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    constructor(private http: HttpClient) {
      this.productsSub = new BehaviorSubject<any[]>(this._products);
      this.cartSub = new BehaviorSubject<any[]>(this._cart); 
    }

    fetchProducts() {
        this.http.get<any[]>('api/products').subscribe(data => {
          this._products = [...data];
          this.productsSub.next([...this._products]);
        });
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

    clearCart() {
      this.cartSub.next([]);
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

    checkout(data: any) {
      console.log("sdddddddddddddsa", data);
        return this.http.post('/api/checkout', data);
    }
}
