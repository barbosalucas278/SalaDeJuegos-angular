import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LogService } from 'src/app/services/log/log.service';
import { PuntajeJuego } from '../../class/puntaje-juego';
import { MayorMenorResultado } from './class/mayor-menor-resultado';
import { MayorMenorService } from './services/mayor-menor.service';

@Component({
  selector: 'app-juego-mayor-menor',
  templateUrl: './juego-mayor-menor.component.html',
  styleUrls: ['./juego-mayor-menor.component.scss'],
})
export class JuegoMayorMenorComponent implements OnInit {
  resultadoDelJuego?: MayorMenorResultado;
  juegoTerminado: boolean;
  constructor(
    private mayorMenorService: MayorMenorService,
    private log: LogService,
    private authService: AuthService
  ) {
    this.juegoTerminado = false;
  }

  ngOnInit(): void {}

  onUserLose(resultado: MayorMenorResultado) {
    this.resultadoDelJuego = resultado;
    this.juegoTerminado = true;
    if (this.resultadoDelJuego.cantidadDeAciertos > 0) {
      const puntaje: PuntajeJuego = {
        nombreJuego: 'MayorMenor',
        puntaje: this.resultadoDelJuego.cantidadDeAciertos * 10,
        usuario: this.authService.currenUser!,
      };
      this.log.savePuntajeJuegos(puntaje);
    }
  }
  onPlayAgain() {
    this.juegoTerminado = false;
    this.resultadoDelJuego = undefined;
    this.mayorMenorService.resetGameParameters();
  }
}
