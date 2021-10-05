import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdivinaColorService {
  colores: string[] = ['Verde', 'Negro', 'Rojo', 'Azul'];
  vidasRestantes: number;
  vidasChangedEvent: EventEmitter<number> = new EventEmitter();
  ceroVidasEvent = new EventEmitter();
  constructor(private http: HttpClient) {
    this.vidasRestantes = 3;
  }
  resetGameParameters() {
    this.vidasRestantes = 3;
    this.vidasChangedEvent.emit();
  }
  restarVida() {
    this.vidasRestantes--;
    if (this.vidasRestantes == 0) {
      this.ceroVidasEvent.emit();
    } else {
      this.vidasChangedEvent.emit(this.vidasRestantes);
    }
  }
  getNombreColor() {
    return this.colores[random(0, 3)];
  }
  getColor() {
    return this.colores[random(0, 3)];
  }
}
function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
