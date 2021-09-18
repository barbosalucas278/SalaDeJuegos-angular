import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegosHomeComponent } from './pages/juegos-home/juegos-home.component';
import { JuegoMayorMenorComponent } from './components/juego-mayor-menor/juego-mayor-menor.component';
import { JuegoAhorcadoComponent } from './components/juego-ahorcado/juego-ahorcado.component';
import { ChatModule } from '../chat/chat.module';


@NgModule({
  declarations: [    
    JuegosHomeComponent,
    JuegoMayorMenorComponent,
    JuegoAhorcadoComponent
  ],
  imports: [    
    CommonModule,
    JuegosRoutingModule,
    ChatModule
  ]
})
export class JuegosModule { }
