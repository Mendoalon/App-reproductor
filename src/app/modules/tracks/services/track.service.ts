import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient  } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;
  

  constructor(private httpClient: HttpClient ) {
   
  
  }

  //TODO: Devuelve todas la canciones. 
  getAllTracks$(): Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map(({ data }: any)=>{
        return data;
      })
    )
  }

   //TODO: Devuelve todas la canciones Random. 
  getAllRandom$(): Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map(({ data }: any)=>{
        return  data.reverse();
      }),
      catchError((err)=>{
           console.log('Error', err.status);
           
        return of([])
      })
    )
  }




}
