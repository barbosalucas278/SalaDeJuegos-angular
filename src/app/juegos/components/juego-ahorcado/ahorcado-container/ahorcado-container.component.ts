import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AhorcadoResultado } from '../class/ahoracado-resultado';
import { Letra } from '../class/letra';
import { Palabra } from '../class/palabra';
import { AhorcadoService } from '../services/ahorcado.service';

@Component({
  selector: 'app-ahorcado-container',
  templateUrl: './ahorcado-container.component.html',
  styleUrls: ['./ahorcado-container.component.scss'],
})
export class AhorcadoContainerComponent implements OnInit {
  // juegoTerminado: boolean;
  @Output() userWinEvent = new EventEmitter<AhorcadoResultado>();
  @Output() userLoseEvent = new EventEmitter<AhorcadoResultado>();
  // Vidas
  vidas: number;
  //Palabra en juego
  palabraEnJuego?: Palabra;
  letrasEnJuego?: Letra[];
  //Display letras
  displayLetras?: Letra[];
  letraSeleccionada?: Letra;

  constructor(private ahorcadoService: AhorcadoService) {
    //Vidas
    this.vidas = this.ahorcadoService.vidasRestantes;
    this.setPalabraEnJuego().then(() => {
      this.letrasEnJuego = this.palabraEnJuego?.getLetras();
      //display letras
      this.displayLetras = this.ahorcadoService.getLEtrasDisplay();
      this.subscribeEventCeroVidas();
      this.subscribeEventVidasChanged();
    });
  }
  ngOnInit() {}
  async setPalabraEnJuego() {
    //Palabra en juego
    this.palabraEnJuego = await this.ahorcadoService.getPalabra();
  }
  subscribeEventCeroVidas() {
    this.ahorcadoService.ceroVidasEvent.subscribe(() => {
      this.setVidas(0);
      this.mostrarResultadoDelJuego(true);
    });
  }
  subscribeEventVidasChanged() {
    this.ahorcadoService.vidasChangedEvent.subscribe((x) => {
      this.setVidas(x);
    });
  }
  /**Setter Vidas para que no sean negativas */
  setVidas(value: number) {
    if (value >= 0) {
      this.vidas = value;
    }
  }
  actualizarDisplayLetras(letra: Letra) {
    this.actualizarLetras();
    if (!letra.esCorrecta) {
      this.ahorcadoService.restarVida();
    }
  }
  /*Sector Palabra en juego */
  verificarLetraSeleccionada() {
    if (this.letraSeleccionada) {
      const indexs: number[] = [];
      //console.log('LEtras en juego ' + JSON.stringify(this.letrasEnJuego));
      for (let i = 0; i < this.letrasEnJuego!.length; i++) {
        if (
          this.letrasEnJuego![i].caracter == this.letraSeleccionada.caracter
        ) {
          this.letraSeleccionada!.esCorrecta = true;
          indexs.push(i);
          this.letrasEnJuego![i].esCorrecta = true;
        }
      }
      //console.log('Indices seleccionadas ' + indexs);

      this.mostrarLetra(indexs);
    }
    this.actualizarDisplayLetras(this.letraSeleccionada!);
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

          selLetra!.classList.remove('letraOculta');
          selLetra!.classList.add('letraVisible');
        }
      }
    });
  }
  validarPalabraEnJuego() {
    let faltanLetras = true;
    this.letrasEnJuego?.forEach((x) => {
      if (!x.esCorrecta) {
        faltanLetras = false;
      }
    });

    return faltanLetras;
  }
  /*Sector Display Letras*/
  onLetraSeleccionada(e: any) {
    //Hago el split de los espacios para poder obtener solamente el caracter
    const letraSeleccionada: string = e.target.textContent.split(' ')[1];
    const letra = new Letra(letraSeleccionada);
    this.letraSeleccionada = letra;
    this.verificarLetraSeleccionada();
    if (this.validarPalabraEnJuego()) {
      this.mostrarResultadoDelJuego(false);
    }
  }
  actualizarLetras() {
    if (this.letraSeleccionada) {
      let letraIndex;
      let esCorrecta;
      this.displayLetras?.forEach((x, index) => {
        if (x.caracter == this.letraSeleccionada?.caracter) {
          x.esCorrecta = this.letraSeleccionada.esCorrecta;
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
  /* Resultado del juego */
  mostrarResultadoDelJuego(perdio: boolean) {
    if (perdio) {
      const datosResultado: AhorcadoResultado = {
        palabraEnJuego: this.palabraEnJuego!,
        userLose: true,
      };
      this.userLoseEvent.emit(datosResultado);
    } else {
      const datosResultado: AhorcadoResultado = {
        vidasRestantes: this.vidas,
        palabraEnJuego: this.palabraEnJuego!,
        userWin: true,
      };
      this.userWinEvent.emit(datosResultado);
    }
  }
}
