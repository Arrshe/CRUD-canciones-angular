import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Cancion from 'src/app/model/Cancion';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {

  canciones: Cancion[] = [];

  //array para guardar las subscripciones observables
  listaObservers!: Array<Subscription>;

  constructor(
    private crudService:CrudServiceService
  ) { }

  ngOnInit(): void {
  
    const subsCanciones = this.crudService.getCanciones$().subscribe(canciones =>{
      this.canciones = canciones;
    });

    //guardamos las subscripciones observables en el array
    this.listaObservers = [subsCanciones];
  }

  //nos desubscribimos para ahorrar recursos
  ngOnDestroy():void{
    
    this.listaObservers.forEach(sub=>sub.unsubscribe());
    console.log("--on destroy");
    
  }

}
