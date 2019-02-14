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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HomeComponentComponent,
    PageNotFoundComponentComponent,
    CategorieComponentComponent,
    SottoCategorieComponentComponent,
    MessageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
