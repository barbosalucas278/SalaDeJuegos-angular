import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AhorcadoContainerComponent } from './ahorcado-container/ahorcado-container.component';
import { JuegoAhorcadoComponent } from './juego-ahorcado.component';
import { JuegoAhorcadoRoutingModule } from './juego-ahorcado-routing.module';
import { AhorcadoVidasComponent } from './ahorcado-vidas/ahorcado-vidas.component';
import { AhorcadoPalabraEnJuegoComponent } from './ahorcado-palabra-en-juego/ahorcado-palabra-en-juego.component';
import { AhorcadoLetrasRestantesComponent } from './ahorcado-letras-restantes/ahorcado-letras-restantes.component';
import { AhorcadoResultadoJuegoComponent } from './ahorcado-resultado-juego/ahorcado-resultado-juego.component';

@NgModule({
  declarations: [
    AhorcadoContainerComponent,
    JuegoAhorcadoComponent,
    AhorcadoVidasComponent,
    AhorcadoPalabraEnJuegoComponent,
    AhorcadoLetrasRestantesComponent,
    AhorcadoResultadoJuegoComponent,
  ],
  exports: [AhorcadoContainerComponent, JuegoAhorcadoComponent],
  imports: [CommonModule, JuegoAhorcadoRoutingModule],
})
export class JuegoAhorcadoModule {}
