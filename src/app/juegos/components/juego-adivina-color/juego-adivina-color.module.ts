import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegoAdivinaColorRoutingModule } from './juego-adivina-color-routing.module';
import { JuegoAdivinaColorContainerComponent } from './components/juego-adivina-color-container/juego-adivina-color-container.component';
import { JuegoAdivinaColorResultadosComponent } from './components/juego-adivina-color-resultados/juego-adivina-color-resultados.component';
import { JuegoAdivinaColorComponent } from './juego-adivina-color.component';


@NgModule({
  declarations: [
    JuegoAdivinaColorContainerComponent,
    JuegoAdivinaColorResultadosComponent,
    JuegoAdivinaColorComponent
  ],
  imports: [
    CommonModule,
    JuegoAdivinaColorRoutingModule
  ]
})
export class JuegoAdivinaColorModule { }
