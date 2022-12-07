import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
{ 
  path: 'tracks', 
  loadChildren: () => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
},
{ 
  path: 'favorites', 
  loadChildren: () => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
},
{ 
  path: 'history', 
  loadChildren: () => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
