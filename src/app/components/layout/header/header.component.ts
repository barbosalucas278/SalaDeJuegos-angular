import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hasLogged: boolean;
  constructor(private authService: AuthService) {
    this.hasLogged = this.authService.hasLogged;
  }

  ngOnInit(): void {
    this.authService.statusUserChangedEvent.subscribe((condition) => {
      this.hasLogged = condition;
    });
  }
}
