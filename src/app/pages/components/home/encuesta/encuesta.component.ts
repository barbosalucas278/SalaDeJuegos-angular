import { REFERENCE_PREFIX } from '@angular/compiler/src/render3/view/util';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Encuesta } from 'src/app/class/encuesta';
import { AuthService } from 'src/app/services/auth.service';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss'],
})
export class EncuestaComponent implements OnInit {
  @Output() mensajeEnviadoEvent = new EventEmitter<boolean>();
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private logService: LogService
  ) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, this.nombreValido]],
      apellido: ['', [Validators.required, this.nombreValido]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      telefono: [
        '',
        [Validators.required, Validators.maxLength(10), this.validarTelefono],
      ],
      pregunta1: ['', [Validators.required, Validators.maxLength(500)]],
      pregunta2: ['', [Validators.required]],
      pregunta3: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
  private validarTelefono(control: AbstractControl) {
    const telefono = control.value;
    const reg = new RegExp(/^([0-9])*$/);
    const soloNumeros = reg.test(telefono);
    if (!soloNumeros) {
      return { telefonoInvalido: true };
    }
    return null;
  }
  private nombreValido(control: AbstractControl) {
    const nombre = control.value;
    const reg = new RegExp(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/
    );
    const nombreValido = reg.test(nombre);
    if (!nombreValido) {
      return { nombreInvalido: true };
    }
    return null;
  }
  onSubmit() {
    const datos: any = this.form.value;
    const datosEncuesta: Encuesta = {
      nombre: datos.nombre,
      apellido: datos.apellido,
      edad: datos.edad,
      telefono: datos.telefono,
      gustos: datos.pregunta1,
      dispositivoPreferido: datos.pregunta2,
      jugardorExtremo: datos.pregunta3,
      fecha: new Date().toString(),
      emailUsuario: this.authService.currenUser!.email,
    };

    this.logService
      .saveEncuesta(datosEncuesta)
      .then(() => {
        this.mensajeEnviadoEvent.emit(true);
      })
      .catch(() => {
        this.mensajeEnviadoEvent.emit(false);
      });
  }
}
