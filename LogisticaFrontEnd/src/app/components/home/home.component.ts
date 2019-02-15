import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Ordine } from 'src/app/beans/ordine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
