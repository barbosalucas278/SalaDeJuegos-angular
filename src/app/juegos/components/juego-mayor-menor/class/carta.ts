export class Carta {
  url: string;
  valor!: number;
  constructor(url: string, valor: string) {
    this.url = url;
    this.setValor(valor);
  }
  public setValor(value: string) {
    const codigoDeCarta = value.split('')[0];
    switch (codigoDeCarta) {
      case 'A':
        this.valor = 14;
        break;
      case 'K':
        this.valor = 13;
        break;
      case 'Q':
        this.valor = 12;
        break;
      case 'J':
        this.valor = 11;
        break;
      case '0':
        this.valor = 10;
        break;
      default:
        this.valor = parseInt(codigoDeCarta);
    }
  }
}
