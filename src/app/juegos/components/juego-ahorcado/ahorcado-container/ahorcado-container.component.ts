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
  palabraEnJuego?: Palabra;
  letraSeleccionada?: Letra;
  vidasRestantes!: number;
  vidasReady: boolean;
  juegoTerminado: boolean;
  userWin?:boolean;
  constructor(private ahorcadoService: AhorcadoService) {
    this.juegoTerminado = false;
    this.vidasReady = false;
    this.setVidas();
    this.setPalabraEnJuego();
    this.subscribeEventCeroVidas();
    console.log(this.palabraEnJuego + ' en ctor');
  }
  setVidas() {
    this.vidasRestantes = this.ahorcadoService.vidasRestantes;
    this.ahorcadoService.vidasChangedEvent.subscribe(
      (vidasActualizadas: number) => {
        this.vidasRestantes = vidasActualizadas;
      }
    );
  }
  setPalabraEnJuego() {
    this.ahorcadoService.getPalabra().subscribe(
      (x) => {
        console.log(x.body.Word);
        this.palabraEnJuego = new Palabra(x.body.Word);
      },
      (error) => {
        console.log(error);
      }
    );
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
      if (this.vidasReady) {
        this.ahorcadoService.restarVida();
      }
    }
  }
  compVidasIsReady(estado: boolean) {
    this.vidasReady = estado;
  }
  actualizarLetraSeleccionada(letra: Letra) {
    this.letraSeleccionada = letra;
  }
}
