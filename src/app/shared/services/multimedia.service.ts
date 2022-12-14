import { state } from '@angular/animations';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TrackModel } from '../../core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter();

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);

  public tiempoTranscurrido$: BehaviorSubject<string> = new BehaviorSubject('00:00');

  public tiempoRestante$: BehaviorSubject<string> = new BehaviorSubject('- 00:00');

  public playerEstado$: BehaviorSubject<string> = new BehaviorSubject('pause');

  public playerPorcentaje$: BehaviorSubject<number> = new BehaviorSubject(0);

  public audio!: HTMLAudioElement

  constructor() {
    this.audio = new Audio()

    this.trackInfo$.subscribe(respustaOk => {
      if (respustaOk) {
        this.setAudio(respustaOk);
      }

    })

    this.listenAllEvents();

  }


  //TODO: Funcion para darle tiempo al reproductor. escucha eventos.
  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calcularTime, false);
    this.audio.addEventListener('playing', this.setPlayerStatus, false);
    this.audio.addEventListener('play', this.setPlayerStatus, false);
    this.audio.addEventListener('pause', this.setPlayerStatus, false);
    this.audio.addEventListener('ended', this.setPlayerStatus, false);

    console.log(this.audio.addEventListener);
    

  }


  //TODO: Funcion para capturar los eventos de audio.
  setPlayerStatus = (estado: any) => {
    switch (estado.type) {
      case 'play':
        this.playerEstado$.next('play');
        break;

      case 'playing':
        this.playerEstado$.next('playing');
        break;

      case 'ended':
        this.playerEstado$.next('ended');
        break;

      default:
        this.playerEstado$.next('pause');

    }

    console.log(estado.type);
    
    
  }




  private calcularTime = () => {
    const { duration, currentTime } = this.audio

    this.asignarTiempoTranscurrido(currentTime);
    this.tiempoRestante(currentTime, duration)
    this.calcularTiempo(currentTime, duration );

  }

  //TODO: Funcion para calcular tiempo transcurrido.
  calcularTiempo(tiempoTranscurrido: number, duracion: number): void {
    let porcentaje = (tiempoTranscurrido * 100)/ duracion
    this.playerPorcentaje$.next(porcentaje);
    
  }

  //TODO: Funcion para calcular tiempo transcurrido.
  private asignarTiempoTranscurrido(currentTime: number): void {
    let segundo = Math.floor(currentTime % 60) //TODO: optener los segundos
    let minutos = Math.floor((currentTime / 60) % 60) //TODO: optener el numero entero.

    const mostrarSegundos = (segundo < 10) ? `0${segundo}` : segundo;
    const mostrarMinutos = (minutos < 10) ? `0${minutos}` : minutos;


    const mostrarTiempo = `${mostrarMinutos}: ${mostrarSegundos}`;
    this.tiempoTranscurrido$.next(mostrarTiempo);
  }


  //TODO: Funcion para calcular el tiempo restante.
  private tiempoRestante(currentTime: number, duration: number): void {
    let diferenciaTiempo = duration - currentTime;

    let segundo = Math.floor(diferenciaTiempo % 60) //TODO: optener los segundos
    let minutos = Math.floor((diferenciaTiempo / 60) % 60) //TODO: optener el numero entero.

    const mostrarSegundos = (segundo < 10) ? `0${segundo}` : segundo;
    const mostrarMinutos = (minutos < 10) ? `0${minutos}` : minutos;


    const mostrarTiempo = `- ${mostrarMinutos}: ${mostrarSegundos}`;
    this.tiempoRestante$.next(mostrarTiempo);


  }



  //TODO: Funcion publica. 

  public setAudio(cancion: TrackModel): void {
    this.audio.src = cancion.url;
    this.audio.play();
    
  }


  //Todo: Funcion para pausar y dar play a la cancion.
  public pausarReproducir(): void {
    (this.audio.paused) ? this.audio.play(): this.audio.pause();


    
  } 


  //TODO: Funcion que recibe el porcentaje de mause para adelantar o retrasar el disco.
  public BusquedaAudio(porcentaje: number): void {
    const { duration } = this.audio;
    const porcentajeSegundos = ( porcentaje * duration)/ 100;
    this.audio.currentTime = porcentajeSegundos;
  }

}
