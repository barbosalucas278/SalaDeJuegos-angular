import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado-resultado-juego',
  templateUrl: './ahorcado-resultado-juego.component.html',
  styleUrls: ['./ahorcado-resultado-juego.component.scss'],
})
export class AhorcadoResultadoJuegoComponent implements OnInit {
  @Input() estadoDelJuego?: boolean;
  @Input() userWin?: boolean;
  constructor() {}

  ngOnInit(): void {}
}
