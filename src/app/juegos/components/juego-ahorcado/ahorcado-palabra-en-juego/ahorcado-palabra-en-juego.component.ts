import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Letra } from '../class/letra';
import { Palabra } from '../class/palabra';

@Component({
  selector: 'app-ahorcado-palabra-en-juego',
  templateUrl: './ahorcado-palabra-en-juego.component.html',
  styleUrls: ['./ahorcado-palabra-en-juego.component.scss'],
})
export class AhorcadoPalabraEnJuegoComponent implements OnInit {
  @Input() palabraEnJuego?: Palabra;
  @Input() letraSeleccionada?: Letra;
  @Output() letraCorrectaEvent: EventEmitter<Letra> = new EventEmitter<Letra>();
  @Output() palabraCompletadaEvent = new EventEmitter();
  letrasEnJuego?: Letra[];
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {
    this.letrasEnJuego = this.palabraEnJuego?.getLetras();
    this.verificarLetraSeleccionada();
    this.verificarPalabra();
  }
  verificarLetraSeleccionada() {
    const letrasEnJuego = this.letrasEnJuego?.filter(
      (x) => this.letraSeleccionada?.caracter == x.caracter
    );
    if (letrasEnJuego) {
      const indexs: number[] = [];
      letrasEnJuego.forEach((x) => {
        this.letrasEnJuego?.forEach((l, index) => {
          if (l.caracter == x.caracter) {
            indexs.push(index);
          }
        });
        x.esCorrecta = true;
      });
      this.mostrarLetra(indexs);
      this.letraSeleccionada!.esCorrecta = true;
    }

    this.letraCorrectaEvent.emit(this.letraSeleccionada);
  }
  mostrarLetra(indexs: number[]) {
    for (let index = 0; index < indexs.length; index++) {
      const selLetra = document.getElementById(`${index}`);
      selLetra?.classList.remove('letraOculta');
      selLetra?.classList.add('letraVisible');
    }
  }
  verificarPalabra() {
    const letrasFaltantes = this.letrasEnJuego?.filter((x) => !x.esCorrecta);
    console.log(letrasFaltantes);
  }
}
