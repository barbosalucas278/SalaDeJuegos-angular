import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  email?: string;
  pass?: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.email = '';
    this.pass = '';
    this.form = this.fb.group({
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(this.pass, [Validators.required]),
    });
  }

  onSubmit() {
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
  onTest() {
    this.form.setValue({email:'test@test.com',password:'Test1234'})
  }
  onTest2() {
    this.form.setValue({email:'test2@test2.com',password:'Test21234'})
  }
}
