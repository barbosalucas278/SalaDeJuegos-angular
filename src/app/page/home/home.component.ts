import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario/usuario';
import { Utilidades } from 'src/app/clases/utiliadades/utilidades';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userActual: Usuario;
  constructor(private userService: UserService) {
    this.userActual = userService.currentUser;
  }

  ngOnInit(): void {}
}
