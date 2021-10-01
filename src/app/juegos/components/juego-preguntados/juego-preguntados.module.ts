import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegoPreguntadosRoutingModule } from './juego-preguntados-routing.module';
import { JuegoPreguntadosContainerComponent } from './components/juego-preguntados-container/juego-preguntados-container.component';
import { JuegoPreguntadosResultadosComponent } from './components/juego-preguntados-resultados/juego-preguntados-resultados.component';
import { JuegoPreguntadosInicioComponent } from './components/juego-preguntados-inicio/juego-preguntados-inicio.component';
import { JuegoPreguntadosComponent } from './juego-preguntados.component';


@NgModule({
  declarations: [
    JuegoPreguntadosComponent,
    JuegoPreguntadosContainerComponent,
    JuegoPreguntadosResultadosComponent,
    JuegoPreguntadosInicioComponent
  ],
  imports: [
    CommonModule,
    JuegoPreguntadosRoutingModule
  ]
})
export class JuegoPreguntadosModule { }
