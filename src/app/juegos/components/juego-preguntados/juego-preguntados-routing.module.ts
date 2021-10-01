import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoPreguntadosComponent } from './juego-preguntados.component';

const routes: Routes = [
  {
    path: '',
    component: JuegoPreguntadosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegoPreguntadosRoutingModule { }
