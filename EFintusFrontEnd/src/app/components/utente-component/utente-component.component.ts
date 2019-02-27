import { AuthenticationService } from './../../_services/authentication.service';
import { UtenteBean } from 'src/app/bean/utenteBean';
import { HttpServiceService } from './../../services/http-service/http-service.service';
import { Component, OnInit } from '@angular/core';
import { RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-utente-component',
  templateUrl: './utente-component.component.html',
  styleUrls: ['./utente-component.component.css']
})
export class UtenteComponentComponent implements OnInit {
  utente: UtenteBean;
  modifyForm: FormGroup;
  loading = false;
  submitted = false;
  paymentMethodForm: FormGroup;

  constructor(
    private httpService: HttpServiceService,
    private authguardService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getUserInfo();
    this.buildForm()
  }
  getUserInfo(): any {
    const id = +this.route.snapshot.paramMap.get("id");
    this.httpService.getUtente(id).subscribe(user => {
      this.utente = user;
      console.log(this.utente);
      return this.utente;
    });
  }


  logout() {
    this.authguardService.logout();
    this.router.navigate(["/home"]);
  }

  buildForm() {
    this.modifyForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      indirizzo: ['', Validators.required],
      citta: ['', Validators.required],
      cap: ['', Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      stato: ['', Validators.required],
      telefono: ['', Validators.required],
      partitaIva: [''],
    });

    this.paymentMethodForm = this.formBuilder.group({
      tipologia: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.modifyForm.controls; }

  onSubmitMoficaPagamento() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.paymentMethodForm.invalid) {
      return;
    }
    this.loading = true;
    this.httpService.modificaPagamento(this.paymentMethodForm.value) //TODO CHIAMATA MODIFICA
    this.loading = false;
  }


onSubmitMoficaUtente() {
  this.submitted = true;
  // stop here if form is invalid
  if (this.modifyForm.invalid) {
    return;
  }
  this.loading = true;
  this.httpService.modificaUtente(this.modifyForm.value) //TODO CHIAMATA MODIFICA
  this.loading = false;
}

goToWishlist(){
  this.router.navigate(["/wishlish"]);
}
}
