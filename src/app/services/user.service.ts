import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario/usuario';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser: Usuario;
  constructor() {
    this.currentUser = new Usuario("","");
  }
}
