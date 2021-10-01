import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './pages/components/auth/logout/logout.component';
import { ErrorComponent } from './pages/components/layout/error/error.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'juegos/ListaDeJuegos',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./juegos/juegos.module').then((m) => m.JuegosModule),
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'auth/:action',
    component: AuthComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
