import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudServiceService } from 'src/app/services/crud-service.service';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-agregar-cancion',
  templateUrl: './agregar-cancion.component.html',
  styleUrls: ['./agregar-cancion.component.scss']
})
export class AgregarCancionComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private crudService:CrudServiceService
  ) {
    this.formulario = new FormGroup({
      nombreCancion: new FormControl(),
      nombreAutor: new FormControl(),
      generoMusical: new FormControl()
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.crudService.agregarCancion(this.formulario.value);
  }

}
