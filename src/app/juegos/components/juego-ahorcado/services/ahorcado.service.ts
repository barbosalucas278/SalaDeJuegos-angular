import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Palabra } from '../class/palabra';

@Injectable({
  providedIn: 'root',
})
export class AhorcadoService {
  vidasRestantes: number;
  vidasChangedEvent: EventEmitter<number> = new EventEmitter();
  ceroVidasEvent = new EventEmitter();
  constructor(private http: HttpClient) {
    this.vidasRestantes = 7;
    this.getPalabra();
  }
  restarVida() {
    this.vidasRestantes--;
    if (this.vidasRestantes > 0) {
      this.vidasChangedEvent.emit(this.vidasRestantes);
    } else {
      this.ceroVidasEvent.emit();
    }
  }
  getPalabra(): Observable<any> {
    const url = 'https://palabras-aleatorias-public-api.herokuapp.com/random';
    return this.http.get<any>(url);
  }
}
