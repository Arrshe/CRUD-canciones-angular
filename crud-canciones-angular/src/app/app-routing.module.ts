import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancionesComponent } from './components/canciones/canciones.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'', component: CancionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
