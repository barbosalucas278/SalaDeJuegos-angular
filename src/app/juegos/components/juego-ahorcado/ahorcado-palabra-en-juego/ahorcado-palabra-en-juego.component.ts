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
  letrasEnJuego?: Letra[];
  constructor() {}

  ngOnInit(): void {
    this.letrasEnJuego = this.palabraEnJuego?.getLetras();
  }
  ngOnChanges() {
    this.verificarLetraSeleccionada();
  }
  verificarLetraSeleccionada() {
    const letraEnJuego = this.letrasEnJuego?.find(
      (x) => this.letraSeleccionada?.caracter == x.caracter
    );
    if (letraEnJuego) {
      const index = this.letrasEnJuego?.findIndex((l) => l == letraEnJuego);
      this.mostrarLetra(index!);
      this.letraSeleccionada!.esCorrecta = true;
      letraEnJuego.esCorrecta = true;
    }

    this.letraCorrectaEvent.emit(this.letraSeleccionada);
  }
  mostrarLetra(index: number) {
    const selLetra = document.getElementById(`${index}`);
    selLetra?.classList.remove('letraOculta');
    selLetra?.classList.add('letraVisible');
  }
}
