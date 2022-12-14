import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  estado: string = 'pause';
  @ViewChild('progresoBar') progresoBar: ElementRef = new ElementRef('');

  listaObservadores$: Array<Subscription> = [];

  constructor(public _multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$ = this._multimediaService.playerEstado$.subscribe(
      status =>  {this.estado = status
      console.log(this.estado );
    }
      
    )
    this.listaObservadores$ = [observer1$];

    console.log(this._multimediaService.audio.addEventListener.prototype);
    

  }


  ngOnDestroy(): void {
    this.listaObservadores$.forEach(u => u.unsubscribe())    

  }

  //TODO: Funcion para edelantar y retrasar cancion.
  posicion(event: MouseEvent): void {
    const elNative: HTMLElement = this.progresoBar.nativeElement;
    const { clientX } = event;
    const {x, width } = elNative.getBoundingClientRect();
    const clickX = clientX - x ;
    const porcentajefrenteX = (clickX * 100) / width

    this._multimediaService.BusquedaAudio(porcentajefrenteX);
    

  }
  
  
}
