import { Component, Input, OnInit } from '@angular/core';
import { PuntajeDetalle } from 'src/app/juegos/class/puntaje-detalle';

@Component({
  selector: 'app-resultado-detalle',
  templateUrl: './resultado-detalle.component.html',
  styleUrls: ['./resultado-detalle.component.scss'],
})
export class ResultadoDetalleComponent implements OnInit {
  @Input() resultadoDetalle!: any[];
  constructor() {
    this.resultadoDetalle = [];
  }
  mostrarSoloPrefijo(email: string) {
    return email.split('@')[0];
  }
  ngOnInit(): void {}
}
