import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover:any ={
    cover: 'imagen',
    album: 'nombre albun',
    name: 'nombre artista',
    
    }
  constructor() { }

  ngOnInit(): void {
  }

}
