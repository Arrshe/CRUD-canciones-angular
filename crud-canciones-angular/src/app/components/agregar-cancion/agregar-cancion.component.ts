import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-agregar-cancion',
  templateUrl: './agregar-cancion.component.html',
  styleUrls: ['./agregar-cancion.component.scss']
})
export class AgregarCancionComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombreCancion: new FormControl(),
      nombreAutor: new FormControl(),
      generoMusical: new FormControl()
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}
