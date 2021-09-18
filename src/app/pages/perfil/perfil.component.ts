import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
currentUser?: User;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.currenUser;
  }

}
