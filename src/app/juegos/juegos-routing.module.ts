import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoAhorcadoComponent } from './components/juego-ahorcado/juego-ahorcado.component';
import { JuegoMayorMenorComponent } from './components/juego-mayor-menor/juego-mayor-menor.component';
import { JuegosHomeComponent } from './pages/juegos-home/juegos-home.component';

const routes: Routes = [
  {
    path: 'juegos',
    component: JuegosHomeComponent,
    loadChildren: () => import('../chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path: 'MayorOMenor',
    component: JuegoMayorMenorComponent,
  },
  {
    path: 'Ahorcado',
    component: JuegoAhorcadoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosRoutingModule {}
