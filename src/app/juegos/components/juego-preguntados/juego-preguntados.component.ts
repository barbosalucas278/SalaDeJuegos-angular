import { Component, OnInit } from '@angular/core';
import { PreguntadosResultado } from './class/preguntados-resultado';

@Component({
  selector: 'app-juego-preguntados',
  templateUrl: './juego-preguntados.component.html',
  styleUrls: ['./juego-preguntados.component.scss'],
})
export class JuegoPreguntadosComponent implements OnInit {
  resultadoDelJuego?: PreguntadosResultado;
  juegoTerminado?: boolean;
  constructor() {
    this.juegoTerminado = false;
  }

  ngOnInit(): void {}
  onEmpezarAJugar() {
    this.juegoTerminado = false;
  }
  onProximaPreguntaEvent() {
    console.log('SE lanza una nueva pregunta, manteniendo los aciertos');
    this.juegoTerminado = false;
  }
}
