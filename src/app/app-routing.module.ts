import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {
    path:"",
    redirectTo: "login",
    pathMatch:"full"
  },
  {
    path:"login",
    component: LoginComponent    
  },
  {
    path:"home",
    component: HomeComponent    
  },
  {
    path:"about",
    component: AboutComponent    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
