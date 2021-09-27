import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AhorcadoResultado } from '../class/ahoracado-resultado';

@Component({
  selector: 'app-ahorcado-resultado-juego',
  templateUrl: './ahorcado-resultado-juego.component.html',
  styleUrls: ['./ahorcado-resultado-juego.component.scss'],
})
export class AhorcadoResultadoJuegoComponent implements OnInit {
  @Output() playAgainEvent = new EventEmitter();
  @Input() estadoDelJuego!: boolean;
  @Input() userResultado?: AhorcadoResultado;
  cantidadDePuntos: number;
  constructor(private router: Router) {
    this.cantidadDePuntos = 0;
  }

  ngOnInit(): void {}
  
  ngOnChanges() {
    this.cantidadDePuntos = this.userResultado?.vidasRestantes! * 10;
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
