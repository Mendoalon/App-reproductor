import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';




@NgModule({
  declarations: [
    HeaderUserComponent,
    MediaPlayerComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderUserComponent,
    MediaPlayerComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
