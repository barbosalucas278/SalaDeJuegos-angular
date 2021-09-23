import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hasLogged: boolean;
  emailCurrentUsuario?: string;
  constructor(private authService: AuthService, private router: Router) {
    this.hasLogged = this.authService.hasLogged;
  }

  ngOnInit(): void {
    this.authService.statusUserChangedEvent.subscribe((condition) => {
      this.hasLogged = condition;
      if(condition){
        this.emailCurrentUsuario = this.authService.currenUser?.email;
      }
    });
  }
  onLogin() {
    this.router.navigate(['/auth', 'login']);
  }
  onRegister() {
    this.router.navigate(['/auth', 'register']);
  }
}
