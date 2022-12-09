import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FovoritesPageComponent } from './pages/fovorites-page/fovorites-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    FovoritesPageComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule
  ]
})
export class FavoritesModule { }
