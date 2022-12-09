import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';




@NgModule({
  declarations: [
    HeaderUserComponent,
    MediaPlayerComponent,
    SideBarComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderUserComponent,
    MediaPlayerComponent,
    SideBarComponent,
    SectionGenericComponent,
    CardPlayerComponent,
  ]
})
export class SharedModule { }
