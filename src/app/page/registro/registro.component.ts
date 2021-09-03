import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario/usuario';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  nombreUsuarioNew = '';
  passwordNew = '';
  usuario: Usuario;
  constructor(private route: Router, private userService: UserService) {
    this.usuario = new Usuario('', '');
  }

  ngOnInit(): void {}
  registrarse() {
    this.usuario.nombre = this.nombreUsuarioNew;
    this.usuario.password = this.nombreUsuarioNew;
    this.userService.currentUser = this.usuario;
    if (true) {
      this.route.navigate(['home']);
    }
  }
}
