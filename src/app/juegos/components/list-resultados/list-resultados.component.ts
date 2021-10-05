import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { PuntajeDetalle } from '../../class/puntaje-detalle';
import { PuntajeLista } from '../../class/puntaje-lista';
import { ResultadosService } from '../../services/resultados.service';

@Component({
  selector: 'app-list-resultados',
  templateUrl: './list-resultados.component.html',
  styleUrls: ['./list-resultados.component.scss'],
})
export class ListResultadosComponent implements OnInit {
  tituloDelJuego: string;
  listadoDePuntajes: PuntajeDetalle[];
  mostrandoPuntajes: boolean;
  constructor(private resultadoService: ResultadosService) {
    this.mostrandoPuntajes = false;
    this.tituloDelJuego = '';
    this.listadoDePuntajes = [];
  }
  mostrarResultados(juego: string) {
    this.tituloDelJuego = juego;
    let datos: PuntajeLista[] = [];
    this.resultadoService.getResultados(juego).subscribe((puntaje) => {
      datos = puntaje;
      const listado: any = datos.reduce(
        (acc, puntaje) => ({
          ...acc,
          [puntaje.usuario]: {
            usuario: puntaje.usuario,
            puntaje: datos
              .filter((x) => x.usuario == puntaje.usuario)
              .map((x) => ({ puntaje: x.puntaje }))
              .reduce((acc, el) => acc + el.puntaje, 0),
          },
        }),
        {}
      );
      this.listadoDePuntajes = Object.entries(listado).map<PuntajeDetalle>(
        (x: any) => {
          const puntajeFinal: PuntajeDetalle = {
            puntaje: x[1].puntaje,
            usuario: x[1].usuario,
          };
          return puntajeFinal;
        }
      );

      this.listadoDePuntajes = this.listadoDePuntajes
        .sort((a, b) => {
          return b.puntaje! - a.puntaje!;
        })
        .slice(0, 5);

      this.mostrandoPuntajes = true;
    });
  }
  volverAlListado() {
    this.mostrandoPuntajes = false;
  }

  ngOnInit(): void {}
}
function groupBy(array: any, key: any) {
  return array.reduce(function (rv: any, x: any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, []);
}
