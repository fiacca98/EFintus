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
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data-service/in-memory-data.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponentComponent } from './components/sidebar-component/sidebar-component.component';
import { NgbRatingConfigComponentComponent } from './components/ngb-rating-config-component/ngb-rating-config-component.component';
import { AlertComponentComponent } from './components/alert-component/alert-component.component';

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
    AlertComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
