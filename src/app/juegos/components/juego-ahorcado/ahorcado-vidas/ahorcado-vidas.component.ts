import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AhorcadoService } from '../services/ahorcado.service';

@Component({
  selector: 'app-ahorcado-vidas',
  templateUrl: './ahorcado-vidas.component.html',
  styleUrls: ['./ahorcado-vidas.component.scss'],
})
export class AhorcadoVidasComponent implements OnInit {
  vidas: Number;
  constructor(private ahoracadoService: AhorcadoService) {
    this.vidas = this.ahoracadoService.vidasRestantes;
    this.ahoracadoService.vidasChangedEvent.subscribe((x) => {
      this.vidas = x;
    });
  }
  ngOnInit(): void {}
}
