import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Letra } from '../class/letra';

@Component({
  selector: 'app-ahorcado-letras-restantes',
  templateUrl: './ahorcado-letras-restantes.component.html',
  styleUrls: ['./ahorcado-letras-restantes.component.scss'],
})
export class AhorcadoLetrasRestantesComponent implements OnInit {
  @Input() letraActualizada?: Letra;
  @Output() letraSeleccionadaEvent: EventEmitter<Letra> =
    new EventEmitter<Letra>();
  displayLetras: Letra[] = [
    new Letra('a'),
    new Letra('b'),
    new Letra('c'),
    new Letra('d'),
    new Letra('e'),
    new Letra('f'),
    new Letra('g'),
    new Letra('h'),
    new Letra('i'),
    new Letra('j'),
    new Letra('k'),
    new Letra('l'),
    new Letra('m'),
    new Letra('ñ'),
    new Letra('n'),
    new Letra('o'),
    new Letra('p'),
    new Letra('q'),
    new Letra('r'),
    new Letra('s'),
    new Letra('t'),
    new Letra('u'),
    new Letra('v'),
    new Letra('w'),
    new Letra('x'),
    new Letra('y'),
    new Letra('z'),
  ];
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {}
  ngAfterViewChecked() {
    this.actualizarLetras();
  }
  letraSeleccionada(e: any) {
    //Hago el split de los espacios para poder obtener solamente el caracter
    const letraSeleccionada: string = e.target.textContent.split(' ')[1];
    const letra = new Letra(letraSeleccionada);
    this.letraSeleccionadaEvent.emit(letra);
  }
  actualizarLetras() {
    if (this.letraActualizada) {
      let letraIndex;
      let esCorrecta;
      this.displayLetras.forEach((x, index) => {
        if (x.caracter == this.letraActualizada?.caracter) {
          x.esCorrecta = this.letraActualizada.esCorrecta;
          esCorrecta = x.esCorrecta;
          letraIndex = index;
        }
      });
      const divLetraSeleccionada = document.getElementById(`d${letraIndex}`);
      divLetraSeleccionada?.classList.remove('bg-light');
      if (esCorrecta) {
        divLetraSeleccionada?.classList.add('bg-success');
      } else {
        divLetraSeleccionada?.classList.add('bg-danger');
      }
    }
  }
}
