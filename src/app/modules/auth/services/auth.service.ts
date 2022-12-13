import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = environment.api;

  constructor(private cookie: CookieService, private http: HttpClient) {}

  sendCredencials(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password,
    };

    return this.http.post(`${this.URL}/auth/login`, body).pipe(
      tap((respuestaOk: any) => {
        const { tokenSession, data } = respuestaOk;
        this.cookie.set('token', tokenSession, 4, '/');
      })
    );
  }


  
}
