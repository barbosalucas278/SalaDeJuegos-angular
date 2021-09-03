export class Usuario {
  nombre: string;
  password: string;
  constructor(nombre: string, password: string) {
    this.nombre = nombre;
    this.password = password;
  }

  public set Nombre(v: string) {
    this.nombre = v;
  }
  public get Nombre(): string {
    return this.nombre;
  }

  public set Password(v: string) {
    this.password = v;
  }
  public get Password(): string {
    return this.password;
  }
}
