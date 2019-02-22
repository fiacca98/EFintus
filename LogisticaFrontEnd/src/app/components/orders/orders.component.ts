import { Component, OnInit } from '@angular/core';
import { Ordine } from 'src/app/beans/ordine';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  private orders : Ordine[] = [];

  constructor(private orderService: OrderService) { 
    this.getOrders();
  }

  ngOnInit() {
  }

  getOrders() {
    this.orderService.getOrders()
      .subscribe(orders => this.orders = orders);
  }


}
