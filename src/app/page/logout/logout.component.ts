import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilidades } from 'src/app/clases/utiliadades/utilidades';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.cerrarSesion();
    }, 2000);
  }
  cerrarSesion() {
    this.userService.hasLoggedOn = false;
    Utilidades.renderNavBarLinks(this.userService.hasLoggedOn);
    this.router.navigate(['home']);
  }
}
