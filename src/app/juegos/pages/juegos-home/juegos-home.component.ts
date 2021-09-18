import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-juegos-home',
  templateUrl: './juegos-home.component.html',
  styleUrls: ['./juegos-home.component.scss']
})
export class JuegosHomeComponent implements OnInit {
currentUser:User;
  constructor(private authService:AuthService) { 
    this.currentUser = this.authService.currenUser!;
  }

  ngOnInit(): void {
  }

}
