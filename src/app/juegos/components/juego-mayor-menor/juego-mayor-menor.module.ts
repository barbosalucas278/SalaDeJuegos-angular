import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorMenorContainerComponent } from './mayor-menor-container/mayor-menor-container.component';
import { JuegoMayorMenorComponent } from './juego-mayor-menor.component';
import { JuegoMayorMenorRoutingModule } from './juego-mayor-menor-routing.module';
import { MayorMenorResultadoJuegoComponent } from './mayor-menor-resultado-juego/mayor-menor-resultado-juego.component';

@NgModule({
  declarations: [MayorMenorContainerComponent, JuegoMayorMenorComponent,MayorMenorResultadoJuegoComponent],
  exports: [MayorMenorContainerComponent, JuegoMayorMenorComponent],
  imports: [CommonModule, JuegoMayorMenorRoutingModule],
})
export class JuegoMayorMenorModule {}
