import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-juego-preguntados-inicio',
  templateUrl: './juego-preguntados-inicio.component.html',
  styleUrls: ['./juego-preguntados-inicio.component.scss'],
})
export class JuegoPreguntadosInicioComponent implements OnInit {
  @Output() empezarAJugarEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  emprezarAJugar() {    
    this.empezarAJugarEvent.emit();
  }
}
