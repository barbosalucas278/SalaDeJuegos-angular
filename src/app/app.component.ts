import { Component, OnInit } from '@angular/core';
import { Utilidades } from './clases/utiliadades/utilidades';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    window.onresize = Utilidades.moverLogoStartLeft;
  }

  title = 'TP-LAB4';
}
