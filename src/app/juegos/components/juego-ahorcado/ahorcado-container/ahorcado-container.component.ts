import { Component, Input, OnInit } from '@angular/core';
import { Letra } from '../class/letra';
import { Palabra } from '../class/palabra';
import { AhorcadoService } from '../services/ahorcado.service';

@Component({
  selector: 'app-ahorcado-container',
  templateUrl: './ahorcado-container.component.html',
  styleUrls: ['./ahorcado-container.component.scss'],
})
export class AhorcadoContainerComponent implements OnInit {
  letraSeleccionada?: Letra;
  juegoTerminado: boolean;
  userWin?: boolean;
  constructor(private ahorcadoService: AhorcadoService) {
    this.juegoTerminado = false;
    this.subscribeEventCeroVidas();
  }

  subscribeEventCeroVidas() {
    this.ahorcadoService.ceroVidasEvent.subscribe(() => {
      this.juegoTerminado = true;
    });
  }
  ngOnInit() {}
  actualizarDisplayLetras(letra: Letra) {
    this.letraSeleccionada = letra;
    if (!this.letraSeleccionada?.esCorrecta) {
      this.ahorcadoService.restarVida();
    }
  }

  actualizarLetraSeleccionada(letra: Letra) {
    this.letraSeleccionada = letra;
  }
}
