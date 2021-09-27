import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LogService } from 'src/app/services/log/log.service';
import { PuntajeJuego } from '../../class/puntaje-juego';
import { AhorcadoResultado } from './class/ahoracado-resultado';
import { AhorcadoService } from './services/ahorcado.service';

@Component({
  selector: 'app-juego-ahorcado',
  templateUrl: './juego-ahorcado.component.html',
  styleUrls: ['./juego-ahorcado.component.scss'],
})
export class JuegoAhorcadoComponent implements OnInit {
  juegoTerminado: boolean;
  userWin?: AhorcadoResultado;
  constructor(
    private ahorcadoService: AhorcadoService,
    private logService: LogService,
    private authService: AuthService
  ) {
    this.juegoTerminado = false;
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.ahorcadoService.vidasRestantes = 7;
  }
  onUserWin(datos: AhorcadoResultado) {
    const puntaje: PuntajeJuego = {
      nombreJuego: 'ahorcado',
      usuario: this.authService.currenUser!,
      puntaje: datos.vidasRestantes! * 10,
    };
    this.logService.savePuntajeJuegos(puntaje);
    this.userWin = datos;
    this.juegoTerminado = true;
  }
  onUserLose(datos: AhorcadoResultado) {
    this.userWin = datos;
    this.juegoTerminado = true;
  }
  onPlayAgain() {
    this.juegoTerminado = false;
    this.userWin = undefined;
    this.ahorcadoService.resetGameParameters();
  }
}
