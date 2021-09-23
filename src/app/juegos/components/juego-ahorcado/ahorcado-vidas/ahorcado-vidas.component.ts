import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AhorcadoService } from '../services/ahorcado.service';

@Component({
  selector: 'app-ahorcado-vidas',
  templateUrl: './ahorcado-vidas.component.html',
  styleUrls: ['./ahorcado-vidas.component.scss'],
})
export class AhorcadoVidasComponent implements OnInit {
  @Input() vidas!: number;
  @Output() compVidasReady: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.compVidasReady.emit(true);
  }
}
