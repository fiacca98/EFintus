import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from '../components/orders/orders.component';
import { MagazziniComponent } from '../components/magazzini/magazzini.component';
import { FornitoriComponent } from '../components/fornitori/fornitori.component';
import { ProduttoreComponent } from '../components/produttore/produttore.component';
import { ProdottoComponent } from '../components/prodotto/prodotto.component';
import { LavoratoreComponent } from '../components/lavoratore/lavoratore.component';
import { PermessiComponent } from '../components/permessi/permessi.component';
import { CorriereComponent } from '../components/corriere/corriere.component';

const routes: Routes = [
  {path:'ordini',component:OrdersComponent},
  {path: 'magazzini',component:MagazziniComponent},
  {path: 'fornitori',component:FornitoriComponent},
  {path: 'produttore',component:ProduttoreComponent},
  {path: 'prodotto',component:ProdottoComponent},
  {path: 'lavoratore',component:LavoratoreComponent},
  {path: 'permessi',component:PermessiComponent},
  {path: 'corriere',component:CorriereComponent},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents=[OrdersComponent,MagazziniComponent]