import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCancionComponent } from './components/agregar-cancion/agregar-cancion.component';
import { ListaCancionesComponent } from './components/lista-canciones/lista-canciones.component';

const routes: Routes = [
  {path:'agregar', component: AgregarCancionComponent},
  {path:'lista', component: ListaCancionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
