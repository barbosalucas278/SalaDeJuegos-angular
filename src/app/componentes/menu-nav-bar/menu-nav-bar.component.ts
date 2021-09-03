import { Component, OnInit } from '@angular/core';
import { Utilidades } from 'src/app/clases/utiliadades/utilidades';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu-nav-bar',
  templateUrl: './menu-nav-bar.component.html',
  styleUrls: ['./menu-nav-bar.component.scss'],
})
export class MenuNavBarComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    Utilidades.renderNavBarLinks(this.userService.hasLoggedOn);
  }

}
