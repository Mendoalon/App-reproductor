import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

private readonly URL = environment.api;


  constructor(private http: HttpClient) { }


  searchTracks$(termino: string):  Observable<any>{


    return this.http.get(`${this.URL}/tracks?src=${termino}`).pipe(
      map((dataRaw: any) => dataRaw.data)
      )
  }


}
