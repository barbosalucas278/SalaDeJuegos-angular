import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Letra } from '../class/letra';
import { Palabra } from '../class/palabra';
import { AhorcadoService } from '../services/ahorcado.service';

@Component({
  selector: 'app-ahorcado-palabra-en-juego',
  templateUrl: './ahorcado-palabra-en-juego.component.html',
  styleUrls: ['./ahorcado-palabra-en-juego.component.scss'],
})
export class AhorcadoPalabraEnJuegoComponent implements OnInit {
  palabraEnJuego?: Palabra;
  @Input() letraSeleccionada?: Letra;
  @Output() letraCorrectaEvent: EventEmitter<Letra> = new EventEmitter<Letra>();
  @Output() palabraCompletadaEvent = new EventEmitter();
  letrasEnJuego?: Letra[];
  letraSeleccionadaEnJuego?: Letra;
  constructor(private ahorcadoService: AhorcadoService) {
    this.setPalabraEnJuego();
    console.log('CONTRUCTOR ACTIVADO');
  }

  ngOnInit() {}

  ngOnChanges() {
    console.log('ONCHANGES');
    this.verificarSiSeSeleccionoLetra();
    this.verificarPalabra();
  }
  ngAfterViewChecked() {
    // console.log('AFTER');
    // this.verificarLetraSeleccionada();
    // this.verificarPalabra();
  }
  setPalabraEnJuego() {
    this.palabraEnJuego = this.ahorcadoService.getPalabra();
  }
  verificarSiSeSeleccionoLetra() {
    if (this.letraSeleccionada) {
      const letraEnJuego = this.letrasEnJuego?.find(
        (x) => this.letraSeleccionada?.caracter == x.caracter && !x.esCorrecta
      );
      console.log('LEtra en juego seleccionada ' + letraEnJuego?.caracter);
    }
  }
  verificarLetraSeleccionada() {
    if (this.letraSeleccionadaEnJuego) {
      const indexs: number[] = [];
      console.log('LEtras en juego ' + JSON.stringify(this.letrasEnJuego));
      for (let i = 0; i < this.letrasEnJuego!.length; i++) {
        if (
          this.letrasEnJuego![i].caracter ==
          this.letraSeleccionadaEnJuego.caracter
        ) {
          indexs.push(i);
          this.letrasEnJuego![i].esCorrecta = true;
        }
      }

      console.log('Indices seleccionadas ' + indexs);

      this.mostrarLetra(indexs);
      this.letraSeleccionada!.esCorrecta = true;
    }
    console.log(this.letraSeleccionada);
    console.log(this.letrasEnJuego);

    this.letraCorrectaEvent.emit(this.letraSeleccionada);
  }
  mostrarLetra(indexs: number[]) {
    indexs.forEach((x) => {
      for (
        let index = 0;
        index < this.palabraEnJuego!.getCantidadLetras();
        index++
      ) {
        if (index == x) {
          const selLetra = document.getElementById(`l${index}`);
          console.log(selLetra);

          selLetra!.classList.remove('letraOculta');
          selLetra!.classList.add('letraVisible');
        }
      }
    });
  }
  palabraEnJuegoListaParaMostrar() {
    if (this.palabraEnJuego) {
      this.letrasEnJuego = this.palabraEnJuego?.getLetras();
      return true;
    }
    return false;
  }
  verificarPalabra() {
    if (this.letrasEnJuego) {
      const letrasFaltantes = this.letrasEnJuego?.filter((x) => !x.esCorrecta);
      console.log('Letras que faltan, que estan en falso ' + letrasFaltantes);
    }
  }
}
