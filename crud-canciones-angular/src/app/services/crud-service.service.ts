import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CANCIONES } from '../mock-canciones/mock-canciones'
import Cancion from '../model/Cancion';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  private canciones : Cancion[];
  private mockCanciones: Cancion[] = CANCIONES;
  private canciones$ : Subject<Cancion[]>

  constructor() {

    this.canciones = [];
    this.canciones$ = new Subject();

   }

  agregarCancion(cCancion:Cancion){
    this.canciones.push(cCancion);
    this.mockCanciones.push(cCancion);
    this.canciones$.next(this.canciones);
  }

  getCanciones$():Observable<Cancion[]>{
    return this.canciones$.asObservable();
  }

}
