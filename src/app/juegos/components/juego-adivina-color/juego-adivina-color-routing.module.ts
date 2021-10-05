import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoAdivinaColorComponent } from './juego-adivina-color.component';

const routes: Routes = [
  {
    path: '',
    component: JuegoAdivinaColorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegoAdivinaColorRoutingModule {}
