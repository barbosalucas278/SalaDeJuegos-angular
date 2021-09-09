import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hasLogged: boolean = false;
  nombreUsuario: string = '';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.nombreUsuario = this.authService.currenUser?.displayName;
    console.log(this.hasLogged);
    this.hasLogged = this.authService.hasLogged;
    console.log(this.hasLogged);
    this.authService.statusUserChangedEvent.subscribe((condition) => {
      this.hasLogged = condition;
    });
    console.log(this.hasLogged);
  }
}
