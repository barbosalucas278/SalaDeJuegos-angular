import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AhorcadoContainerComponent } from './ahorcado-container/ahorcado-container.component';
import { JuegoAhorcadoComponent } from './juego-ahorcado.component';
import { JuegoAhorcadoRoutingModule } from './juego-ahorcado-routing.module';
import { AhorcadoResultadoJuegoComponent } from './ahorcado-resultado-juego/ahorcado-resultado-juego.component';

@NgModule({
  declarations: [
    AhorcadoContainerComponent,
    JuegoAhorcadoComponent,
    AhorcadoResultadoJuegoComponent,
  ],
  exports: [AhorcadoContainerComponent, JuegoAhorcadoComponent],
  imports: [CommonModule, JuegoAhorcadoRoutingModule],
})
export class JuegoAhorcadoModule {}
