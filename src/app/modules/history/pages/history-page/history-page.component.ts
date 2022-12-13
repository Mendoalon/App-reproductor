import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  listResult$: Observable<any> = of()

  constructor( private _searchService: SearchService) { }

  ngOnInit(): void {
  }

  receiveData(event: string): void {
    console.log(event);

   this.listResult$ = this._searchService.searchTracks$(event)
    
  }

}
