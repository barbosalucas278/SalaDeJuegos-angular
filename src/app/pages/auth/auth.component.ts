import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  registerMode: boolean = true;
  hasLogout: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const accion = params['action'];
      switch (accion) {
        case 'login':
          this.registerMode = false;
          break;
        case 'register':
          this.registerMode = true;
          break;
      }
    });
  }

}
