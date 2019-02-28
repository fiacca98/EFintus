import { Injectable } from '@angular/core';
import { Navbar } from '../beans/utility/navbar';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private navItems: Navbar[] = [
    new Navbar(0,"Home","/home",[]),
    new Navbar(1,"Ordini","/ordini",[]),
    new Navbar(2,"Magazzini","/magazzini",[]),
    new Navbar(3,"Fornitori","/fornitori",[]),
    new Navbar(4,"Corriere","/corriere",[]),
  ]

  constructor() { }

  getNavItems() : Navbar[] {
    return this.navItems;
  }
}
