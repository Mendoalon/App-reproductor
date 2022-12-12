import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    name: "Getting Over",
    album: "One Love",
    cover: "https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg",
    url: "http://localhost:3000/track.mp3",
    _id: 1
  }

  listaObservadores$: Array<Subscription> = [];

  constructor(private _multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$: Subscription = this._multimediaService.callback.subscribe(
      (response: TrackModel) => {

      }
    )

    this.listaObservadores$ = [observer1$];
  }


  ngOnDestroy(): void {
    this.listaObservadores$.forEach(u => u.unsubscribe())    

  }

}
