export class Usuario {
  nombre: string;
  password: string;
  email: string;
  constructor(nombre: string, password: string, email?: string) {
    this.nombre = nombre;
    this.password = password;
    this.email = email ?? '';
  }

  public get Email(): string {
    return this.email;
  }

  public set Email(v: string) {
    this.email = v;
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
