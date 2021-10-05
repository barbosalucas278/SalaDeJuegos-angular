import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegosHomeComponent } from './pages/juegos-home/juegos-home.component';
import { ChatModule } from '../chat/chat.module';
import { ListJuegosComponent } from './components/list-juegos/list-juegos.component';
import { ListResultadosComponent } from './components/list-resultados/list-resultados.component';
import { ResultadoDetalleComponent } from './components/list-resultados/resultado-detalle/resultado-detalle.component';

@NgModule({
  declarations: [JuegosHomeComponent, ListJuegosComponent, ListResultadosComponent, ResultadoDetalleComponent],
  imports: [CommonModule, JuegosRoutingModule, ChatModule],
})
export class JuegosModule {}
