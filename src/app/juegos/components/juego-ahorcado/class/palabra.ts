import { Letra } from './letra';

export class Palabra {
  palabra: string;
  /**
   *
   */
  constructor(palabra: string) {
    this.palabra = palabra;
  }
  getCantidadLetras() {
    return this.palabra.length;
  }
  getLetras() {
    const letrasContenidas = this.palabra.split('');
    const arrayLetras = letrasContenidas.map(x => new Letra(x));
    return arrayLetras;
  }
}
