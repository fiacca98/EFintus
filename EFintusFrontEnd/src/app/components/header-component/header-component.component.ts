import { UtenteBean } from 'src/app/bean/utenteBean';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  currentUser: UtenteBean;
  constructor(  private router: Router
    ) { }

  ngOnInit() {
  }


  goToUtente() {
    if ( this.currentUser != undefined){
      this.router.navigate(["/utente/" + this.currentUser.id]);
    } else  this.router.navigate(["login"]);

  }

  searchTags(){

  }

  
  goToCarrello() {
      this.router.navigate(["/carrello"]);
  }
}

