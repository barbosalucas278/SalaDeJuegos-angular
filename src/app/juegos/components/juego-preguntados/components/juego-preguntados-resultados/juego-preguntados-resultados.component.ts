import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PreguntadosResultado } from '../../class/preguntados-resultado';

@Component({
  selector: 'app-juego-preguntados-resultados',
  templateUrl: './juego-preguntados-resultados.component.html',
  styleUrls: ['./juego-preguntados-resultados.component.scss'],
})
export class JuegoPreguntadosResultadosComponent implements OnInit {
  @Output() playAgainEvent = new EventEmitter();
  @Output() proximaPreguntaEvent = new EventEmitter();
  @Input() userResultado?: PreguntadosResultado;
  //pensar donde y cuando mostrar estos datos
  cantidadDePuntos: number;
  cantidadDeAciertos: number;
  juegoTerminado: boolean;
  constructor(private router: Router) {
    this.juegoTerminado = false;
    this.cantidadDePuntos = 0;
    this.cantidadDeAciertos = 0;
  }

  ngOnInit(): void {}
  ngOnChanges() {
    this.cantidadDePuntos = this.userResultado!.cantidadDeAciertos * 10;
    //Guardar los puntos aca
  }
  onPlayAgain() {
    setTimeout(() => {
      this.playAgainEvent.emit();
    }, 2000);
  }
  onBackToMenu() {
    setTimeout(() => {
      this.router.navigate(['/juegos/ListaDeJuegos']);
    }, 2000);
  }
  onNextPregunta() {
    this.proximaPreguntaEvent.emit();
  }
}
