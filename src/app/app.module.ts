import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InjectSessionInterceptor } from './core/Interceptors/inject-session.interceptor';

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
    //TODO: se importa Cookie service para guardar el token.
    CookieService, 

    {
      //TODO: se importa para interceptar la peticiones y iyectar el token.
      provide: HTTP_INTERCEPTORS,
      useClass: InjectSessionInterceptor,
      multi: true,
    }
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
