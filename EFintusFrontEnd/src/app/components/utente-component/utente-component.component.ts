import { AuthenticationService } from './../../_services/authentication.service';
import { UtenteBean } from 'src/app/bean/utenteBean';
import { HttpServiceService } from './../../services/http-service/http-service.service';
import { Component, OnInit } from '@angular/core';
import { RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-utente-component',
  templateUrl: './utente-component.component.html',
  styleUrls: ['./utente-component.component.css']
})
export class UtenteComponentComponent implements OnInit {
  utente: UtenteBean;

  constructor(
    private httpService: HttpServiceService,
    private authguardService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
      ) { }

  ngOnInit() {
    this.getUserInfo()
  }
  getUserInfo(): UtenteBean {
    const id = +this.route.snapshot.paramMap.get("id");
    this.httpService.getUtente(id).subscribe(user => {
      this.utente = user;
    });
    console.log(this.utente);
  return this.utente;
  
  }


  logout(){
    this.authguardService.logout();
    this.router.navigate(["/home"]);
  }

}
