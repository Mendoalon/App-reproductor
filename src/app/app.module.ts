import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CookieService } from 'ngx-cookie-service';

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

  providers: [
    CookieService //TODO: se importa Cookie service para guardar el token.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
