import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '../../services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {
  tracksTrending: Array<TrackModel>= []
  tracksRandom: Array<TrackModel>= []

  listObservers$: Array<Subscription> = []

  constructor( private _trackService: TrackService) { }

  ngOnInit(): void {
   this.loadDataAll();
   this.loadDataRandom(); 
  
  }


  loadDataAll(): void {
    this._trackService.getAllTracks$().subscribe(
      (response: TrackModel[]) =>{
        this.tracksTrending = response; 
        
      }
    )
  }

  loadDataRandom(): void {
    this._trackService.getAllRandom$().subscribe(
      (response: TrackModel[]) =>{
        this.tracksRandom = response;
      }
    )
  }



}
