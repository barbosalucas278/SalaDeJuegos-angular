import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  errorCheck: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    let nickUser = '';
    let emailUser = '';
    let passwordUser = '';

    this.form = new FormGroup({
      nick: new FormControl(nickUser, [
        Validators.required,
        Validators.maxLength(30),
      ]),
      email: new FormControl(emailUser, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(passwordUser, [Validators.required]),
    });
  }
  onSubmit() {
    const { nick, email, password } = this.form.value;
    const user: User = new User(nick,email, password);
    this.authService
      .register(user)
      .then(() => {
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000);
      })
      .catch((error) => {
        this.errorCheck = true;
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.errorMessage =
              'Ya se encuentra un usuario registrado con ese email';
        }
        setTimeout(() => {
          this.errorCheck = false;
          this.errorMessage = '';
        }, 4000);
      });
  }
}
