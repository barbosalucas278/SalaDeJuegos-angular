import { Palabra } from './palabra';

export interface AhorcadoResultado {
  vidasRestantes?: number;
  palabraEnJuego: Palabra;
  userWin?: boolean;
  userLose?: boolean;
}
