import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PreguntadosResultado } from '../../class/preguntados-resultado';

@Component({
  selector: 'app-juego-preguntados-resultados',
  templateUrl: './juego-preguntados-resultados.component.html',
  styleUrls: ['./juego-preguntados-resultados.component.scss'],
})
export class JuegoPreguntadosResultadosComponent implements OnInit {
  @Input() userResultado?: PreguntadosResultado;
  @Output() playAgainEvent = new EventEmitter();
  cantidadDePuntos: number;
  /**
   *
   */
  constructor(private router: Router) {
    this.cantidadDePuntos = 0;
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
  ngOnInit(): void {}
  ngOnChanges() {
    this.cantidadDePuntos = this.userResultado?.cantidadDeAciertos! * 10;
  }
}
