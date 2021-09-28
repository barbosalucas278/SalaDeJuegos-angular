import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MayorMenorResultado } from '../class/mayor-menor-resultado';

@Component({
  selector: 'app-mayor-menor-resultado-juego',
  templateUrl: './mayor-menor-resultado-juego.component.html',
  styleUrls: ['./mayor-menor-resultado-juego.component.scss'],
})
export class MayorMenorResultadoJuegoComponent implements OnInit {
  @Output() playAgainEvent = new EventEmitter();
  @Input() userResultado?: MayorMenorResultado;
  cantidadDePuntos: number;
  cantidadDeAciertos:number;
  constructor(private router: Router) {
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
}
