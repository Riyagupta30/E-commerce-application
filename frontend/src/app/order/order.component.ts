import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {
orders: any = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any>('/api/orders').subscribe(data => this.orders = [...data])
  }

  totalEarnings(orders:any){
    return orders.reduce((acc:any, cur:any) => acc + this.orderTotal(cur.items), 0)
  }

  totalItems(orders : any) {
    return orders.reduce((acc:any, cur:any) => acc + cur.items.length, 0);
  }

  orderTotal(items:any){
    return items.reduce((acc:any, cur:any) => acc + cur.price, 0)
  }
}
