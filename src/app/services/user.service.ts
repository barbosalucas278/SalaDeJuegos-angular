import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario/usuario';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  hasLoggedOn: boolean;
  currentUser: Usuario;
  constructor() {
    this.currentUser = new Usuario('', '');
    this.hasLoggedOn = false;
  }
  setUser(nombre:string,password:string){
    this.currentUser.Nombre = nombre;
    this.currentUser.Password = password;
  }
}
