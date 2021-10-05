import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AdivinaColorResultados } from '../../services/adivina-color-resultados';

@Component({
  selector: 'app-juego-adivina-color-resultados',
  templateUrl: './juego-adivina-color-resultados.component.html',
  styleUrls: ['./juego-adivina-color-resultados.component.scss']
})
export class JuegoAdivinaColorResultadosComponent implements OnInit {

  @Output() playAgainEvent = new EventEmitter();
  @Input() userResultado?: AdivinaColorResultados;
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
