import { CategorieComponentComponent } from './components/categorie-component/categorie-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'categorie', component: CategorieComponentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
