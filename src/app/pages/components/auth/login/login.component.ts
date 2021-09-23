import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  checkError: boolean = false;
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    let emailUser = '';
    let passwordUser = '';

    this.form = new FormGroup({
      email: new FormControl(emailUser, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(passwordUser, [Validators.required]),
    });
  }
  onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.authService
        .login(email, password)
        .then(() => {
          setTimeout(() => {
            this.router.navigate(['/juegos/ListaDeJuegos']);
          }, 2000);
        })
        .catch((error) => {
          this.checkError = true;
          switch (error.code) {
            case 'auth/user-not-found':
              this.errorMessage = `No existe el usuario en nuestro registro`;
              break;
          }
          setTimeout(() => {
            this.checkError = false;
            this.errorMessage = ``;
          }, 4000);
        });
    }
  }
  onTest() {
    this.authService
      .login('test@test.com', 'Test1234')
      .then(() => {
        setTimeout(() => {
          this.router.navigate(['/juegos/ListaDeJuegos']);
        }, 2000);
      })
      .catch((error) => {
        this.checkError = true;
        switch (error.code) {
          case 'auth/user-not-found':
            this.errorMessage = `Ocurrio un problema`;
            break;
        }
        setTimeout(() => {
          this.checkError = false;
          this.errorMessage = ``;
        }, 4000);
      });
  }
  onTest2() {
    this.authService
      .login('test2@test2.com', 'Test21234')
      .then(() => {
        setTimeout(() => {
          this.router.navigate(['/juegos/ListaDeJuegos']);
        }, 2000);
      })
      .catch((error) => {
        this.checkError = true;
        switch (error.code) {
          case 'auth/user-not-found':
            this.errorMessage = `Ocurrio un problema`;
            break;
        }
        setTimeout(() => {
          this.checkError = false;
          this.errorMessage = ``;
        }, 4000);
      });
  }
}
