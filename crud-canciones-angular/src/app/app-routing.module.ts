import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancionesComponent } from './components/canciones/canciones.component';
import { AppComponent } from './app.component';
import { AgregarCancionComponent } from './components/agregar-cancion/agregar-cancion.component';

const routes: Routes = [
  {path:'', component: CancionesComponent},
  //{path:'agregar', component: AgregarCancionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
