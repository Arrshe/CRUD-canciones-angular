import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AgregarCancionComponent } from './components/agregar-cancion/agregar-cancion.component';
import { EditarCancionComponent } from './components/editar-cancion/editar-cancion.component';
import { ListaCancionesComponent } from './components/lista-canciones/lista-canciones.component';

const routes: Routes = [
  {path:'agregar', component: AgregarCancionComponent},
  {path:'lista', component: ListaCancionesComponent},
  {path:'editar', component: EditarCancionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
