import { Component, OnInit } from '@angular/core';
import { Utilidades } from 'src/app/clases/utiliadades/utilidades';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  nombreUsuarioInput = '';
  passwordInput = '';

  constructor() {}

  ngOnInit(): void {}
  iniciarSesion() {
    
  }
}
