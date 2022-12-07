import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FovoritesPageComponent } from './pages/fovorites-page/fovorites-page.component';


@NgModule({
  declarations: [
    FovoritesPageComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule
  ]
})
export class FavoritesModule { }
