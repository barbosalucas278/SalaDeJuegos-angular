import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoMayorMenorComponent } from './components/juego-mayor-menor/juego-mayor-menor.component';
import { ListJuegosComponent } from './components/list-juegos/list-juegos.component';
import { JuegosHomeComponent } from './pages/juegos-home/juegos-home.component';

const routes: Routes = [
  {
    path: 'juegos',
    component: JuegosHomeComponent,
    children: [
      {
        path: 'ListaDeJuegos',
        component: ListJuegosComponent,
      },
      {
        path: 'MayorOMenor',
        loadChildren: () => import('./components/juego-mayor-menor/juego-mayor-menor.module').then(m => m.JuegoMayorMenorModule)
      },
      {
        path: 'Ahorcado',
        loadChildren: () => import('./components/juego-ahorcado/juego-ahorcado.module').then(m => m.JuegoAhorcadoModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosRoutingModule {}
