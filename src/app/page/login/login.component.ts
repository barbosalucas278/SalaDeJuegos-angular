import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilidades } from 'src/app/clases/utiliadades/utilidades';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  nombreUsuarioInput = '';
  passwordInput = '';

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}
  iniciarSesion() {
    this.userService.setUser(this.nombreUsuarioInput, this.passwordInput);
    setTimeout(() => {
      this.userService.hasLoggedOn = true;
      Utilidades.renderNavBarLinks(this.userService.hasLoggedOn);
      this.router.navigate(['home']);
    }, 2000);
  }
  
}