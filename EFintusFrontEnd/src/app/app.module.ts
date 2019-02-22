import { CategorieComponentComponent } from './components/categorie-component/categorie-component.component';
import { SottoCategorieComponentComponent } from './components/sotto-categorie-component/sotto-categorie-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { MessageComponentComponent } from './components/message-component/message-component.component';
import { ListaProdottiComponentComponent } from './components/lista-prodotti-component/lista-prodotti-component.component';
import { ProdottoComponentComponent } from './components/prodotto-component/prodotto-component.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponentComponent } from './components/sidebar-component/sidebar-component.component';
import { NgbRatingConfigComponentComponent } from './components/ngb-rating-config-component/ngb-rating-config-component.component';
import { AlertComponentComponent } from './components/alert-component/alert-component.component';
import { RecensioneComponentComponent } from './components/recensione-component/recensione-component.component';
import { CarrelloComponentComponent } from './components/carrello-component/carrello-component.component';
import { UtenteComponentComponent } from './components/utente-component/utente-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './_guards';
import { AlertComponent } from './_directives';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertService, AuthenticationService, UserService } from './_services';
//import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HomeComponentComponent,
    PageNotFoundComponentComponent,
    CategorieComponentComponent,
    SottoCategorieComponentComponent,
    MessageComponentComponent,
    ListaProdottiComponentComponent,
    ProdottoComponentComponent,
    SidebarComponentComponent,
    NgbRatingConfigComponentComponent,
    AlertComponentComponent,
    RecensioneComponentComponent,
    CarrelloComponentComponent,
    UtenteComponentComponent,
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
