import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoMayorMenorComponent } from './juego-mayor-menor.component';


const routes: Routes = [
  {
    path: '',
    component: JuegoMayorMenorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegoMayorMenorRoutingModule {}
