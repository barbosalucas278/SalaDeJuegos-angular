import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegoPreguntadosRoutingModule } from './juego-preguntados-routing.module';
import { JuegoPreguntadosContainerComponent } from './components/juego-preguntados-container/juego-preguntados-container.component';
import { JuegoPreguntadosResultadosComponent } from './components/juego-preguntados-resultados/juego-preguntados-resultados.component';
import { JuegoPreguntadosComponent } from './juego-preguntados.component';


@NgModule({
  declarations: [
    JuegoPreguntadosComponent,
    JuegoPreguntadosContainerComponent,
    JuegoPreguntadosResultadosComponent,
  ],
  imports: [
    CommonModule,
    JuegoPreguntadosRoutingModule
  ]
})
export class JuegoPreguntadosModule { }
