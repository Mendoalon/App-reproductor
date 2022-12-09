import { NgModule,  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FovoritesPageComponent  } from './pages/fovorites-page/fovorites-page.component';

const routes: Routes = [
  {
    path: '',
   component: FovoritesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
