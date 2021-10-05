import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LogService } from 'src/app/services/log/log.service';
import { PuntajeJuego } from '../../class/puntaje-juego';
import { AdivinaColorResultados } from './services/adivina-color-resultados';
import { AdivinaColorService } from './services/adivina-color.service';

@Component({
  selector: 'app-juego-adivina-color',
  templateUrl: './juego-adivina-color.component.html',
  styleUrls: ['./juego-adivina-color.component.scss']
})
export class JuegoAdivinaColorComponent implements OnInit {
  resultadoDelJuego?: AdivinaColorResultados;
  juegoTerminado: boolean;
  constructor(
    private mayorMenorService: AdivinaColorService,
    private log: LogService,
    private authService: AuthService
  ) {
    this.juegoTerminado = false;
  }

  ngOnInit(): void {}

  onUserLose(resultado: AdivinaColorResultados) {
    this.resultadoDelJuego = resultado;
    this.juegoTerminado = true;
    if (this.resultadoDelJuego.cantidadDeAciertos > 0) {
      const puntaje: PuntajeJuego = {
        nombreJuego: 'AdivinaColor',
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
