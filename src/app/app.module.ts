import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthComponent } from './pages/auth/auth.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HeaderComponent } from './pages/components/layout/header/header.component';
import { FooterComponent } from './pages/components/layout/footer/footer.component';
import { ErrorComponent } from './pages/components/layout/error/error.component';
import { RegisterComponent } from './pages/components/auth/register/register.component';
import { LoginComponent } from './pages/components/auth/login/login.component';
import { LogoutComponent } from './pages/components/auth/logout/logout.component';
import { JuegosModule } from './juegos/juegos.module';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseModule } from './firebase/firebase.module';
import { EncuestaComponent } from './pages/components/home/encuesta/encuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AuthComponent,
    PerfilComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    EncuestaComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FirebaseModule,
    HttpClientModule,
    JuegosModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
