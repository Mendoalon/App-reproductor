import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

    constructor(  private router: Router,
                  private cookie: CookieService){

    }


  //TODO: Guardian de la session.
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.revisarookieSession(); 
  }

  revisarookieSession(): boolean{

    try {

      const token: boolean = this.cookie.check('token');
      console.log('okkk', token);

      if (!token) {
        this.router.navigate(['/', 'auth']);
      }
      
      return token;


    } catch (error) {

      console.log('Algoo esta mal', error);
      return false;

    }

  }

  
}
