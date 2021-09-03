import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './page/error/error.component';
import { MenuNavBarComponent } from './componentes/menu-nav-bar/menu-nav-bar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistroComponent } from './page/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    MenuNavBarComponent,
    FooterComponent,
    RegistroComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
