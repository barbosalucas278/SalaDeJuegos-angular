import { Component, OnInit } from '@angular/core';
import { Utilidades } from 'src/app/clases/utiliadades/utilidades';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Utilidades.moverLogoStartLeft();
  }
  
  
}
