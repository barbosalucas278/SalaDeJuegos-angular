import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { ListJuegosComponent } from './components/list-juegos/list-juegos.component';
import { JuegosHomeComponent } from './pages/juegos-home/juegos-home.component';

const routes: Routes = [
  {
    path: 'juegos',
    component: JuegosHomeComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'ListaDeJuegos',
        component: ListJuegosComponent,
      },
      {
        path: 'MayorOMenor',
        loadChildren: () =>
          import(
            './components/juego-mayor-menor/juego-mayor-menor.module'
          ).then((m) => m.JuegoMayorMenorModule),
      },
      {
        path: 'Ahorcado',
        loadChildren: () =>
          import('./components/juego-ahorcado/juego-ahorcado.module').then(
            (m) => m.JuegoAhorcadoModule
          ),
      },
      {
        path: 'Preguntados',
        loadChildren: () =>
          import(
            './components/juego-preguntados/juego-preguntados.module'
          ).then((m) => m.JuegoPreguntadosModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosRoutingModule {}
