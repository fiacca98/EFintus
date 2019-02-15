import { Component, OnInit } from '@angular/core';
import { Navbar } from 'src/app/beans/utility/navbar';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu: Navbar[] = [];

  constructor(private navService: NavbarService) {
    this.menu = navService.getNavItems();
  }

  ngOnInit() {
  }
}
