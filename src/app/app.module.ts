import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ //TODO: Solo declaraciones, componentes, directivas, pipes..... 
    AppComponent
  ],
  imports: [ //TODO: Solo se importa otros modules... 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],

  exports: [], //TODO: se exportan los modules compartidos... 

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
