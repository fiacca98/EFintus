import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NavbarService } from './services/navbar.service';
import { OrdersComponent } from './components/orders/orders.component';
import { AppRoutingModule } from './router/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { OrderService } from './services/order.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrdersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    NavbarService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
