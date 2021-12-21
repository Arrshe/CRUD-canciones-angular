import { Component, OnInit } from '@angular/core';
import Cancion from 'src/app/model/Cancion';
import { CrudServiceService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {

  canciones: Cancion[] = [];

  constructor(
    private crudService:CrudServiceService
  ) { }

  ngOnInit(): void {
  
    this.crudService.getCanciones$().subscribe(canciones =>{
      this.canciones = canciones;
    });
  }

}
