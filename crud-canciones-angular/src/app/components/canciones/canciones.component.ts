import { Component, OnInit } from '@angular/core';
import { CANCIONES } from '../../mock-canciones/mock-canciones';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {

  canciones = CANCIONES;

  constructor() { }

  ngOnInit(): void {
  }

}
