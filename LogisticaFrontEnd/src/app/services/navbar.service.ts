import { Injectable } from '@angular/core';
import { Navbar } from '../beans/utility/navbar';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private navItems: Navbar[] = [
    new Navbar(0,"Home",[new Navbar(1,"HomeSub",[])]),
    new Navbar(1,"Ordini",[]),
    new Navbar(2,"Magazzini",[]),
    new Navbar(2,"Fornitori",[])
  ]

  constructor() { }

  getNavItems() : Navbar[] {
    return this.navItems;
  }
}
