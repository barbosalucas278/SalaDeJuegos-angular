export class Letra {
  caracter: string = '';
  esCorrecta: boolean;
  /**
   *
   */
  constructor(caracter: string) {
    this.Caracter = caracter;
    this.esCorrecta = false;
  }

  public set Caracter(v: string) {
    if (v.length === 1) {
      this.caracter = v;
    }
  }
}
