import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hasLogged: boolean = false;
  mensajeEnviado?: boolean;
  constructor(private authService: AuthService) {
    this.mensajeEnviado = undefined;
  }

  ngOnInit(): void {
    this.hasLogged = this.authService.hasLogged;
    this.authService.statusUserChangedEvent.subscribe((condition) => {
      this.hasLogged = condition;
    });
  }
  onEncuestaSubmit(event: boolean) {
    this.mensajeEnviado = event;
  }
}
