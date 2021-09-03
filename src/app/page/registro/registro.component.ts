import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario/usuario';
import { Utilidades } from 'src/app/clases/utiliadades/utilidades';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  nombreUsuarioNew = '';
  passwordNew = '';
  constructor(private route: Router, private userService: UserService) {}

  ngOnInit(): void {}
  registrarse() {
    this.userService.currentUser.Nombre = this.nombreUsuarioNew;
    this.userService.currentUser.Password = this.passwordNew;
    if (true) {
      this.userService.hasLoggedOn = true;
      setTimeout(() => {
        Utilidades.renderNavBarLinks(this.userService.hasLoggedOn);
        this.route.navigate(['home']);
      }, 2000);
    }
  }
}
