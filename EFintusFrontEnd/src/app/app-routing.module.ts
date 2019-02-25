import { WishListComponentComponent } from './components/wish-list-component/wish-list-component.component';
import { LoginComponent } from './login/login.component';
import { ProdottoComponentComponent } from './components/prodotto-component/prodotto-component.component';
import { ListaProdottiComponentComponent } from './components/lista-prodotti-component/lista-prodotti-component.component';
import { CategorieComponentComponent } from './components/categorie-component/categorie-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { SottoCategorieComponentComponent } from './components/sotto-categorie-component/sotto-categorie-component.component';
import { UtenteComponentComponent } from './components/utente-component/utente-component.component';
import { AuthGuard } from './_guards';
import { RegisterComponent } from './register';
import { CarrelloComponentComponent } from './components/carrello-component/carrello-component.component';
import { AcquistoComponentComponent } from './components/acquisto-component/acquisto-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'categorie', component: CategorieComponentComponent },
  { path: 'sottocategorie/:id', component: SottoCategorieComponentComponent },
  { path: 'listaProdotti/:id', component: ListaProdottiComponentComponent },
  { path: 'prodotto/:id', component: ProdottoComponentComponent }, 
  { path: 'carrello', component: CarrelloComponentComponent }, //TEMP, canActivate: [AuthGuard]},
  { path: 'acquisto', component: AcquistoComponentComponent },//TEMP, canActivate: [AuthGuard]},
  { path: 'utente/:id', component: UtenteComponentComponent}, //TEMP, canActivate: [AuthGuard]},
  { path: 'wishlist', component: WishListComponentComponent}, //TEMP, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
