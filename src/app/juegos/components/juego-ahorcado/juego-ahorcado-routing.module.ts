import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoAhorcadoComponent } from './juego-ahorcado.component';

const routes: Routes = [
  {
    path: '',
    component: JuegoAhorcadoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegoAhorcadoRoutingModule {}
