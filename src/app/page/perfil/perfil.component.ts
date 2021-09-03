import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario/usuario';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  currentUser: Usuario;
  constructor(private userService: UserService) {
    this.currentUser = this.userService.currentUser;
  }
  ngOnInit(): void {}
}
