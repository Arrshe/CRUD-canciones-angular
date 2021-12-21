import { Component, OnInit } from '@angular/core';
import { CANCIONES } from 'src/app/mock-canciones/mock-canciones';
import Cancion from 'src/app/model/Cancion';

@Component({
  selector: 'app-lista-canciones',
  templateUrl: './lista-canciones.component.html',
  styleUrls: ['./lista-canciones.component.scss']
})
export class ListaCancionesComponent implements OnInit {

  canciones:Cancion[] = CANCIONES;

  constructor() { }

  ngOnInit(): void {
    console.log(this.canciones)
  }

}
