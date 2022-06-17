import { Empleado } from './empleado';

export class EmpleadoImpl implements Empleado {
  id: number;
  nombre: string;
  apellido: string;
  direccion: string;
  dni: string;
  email: string;
  ciudad: string;
  provincia: string;
  servicios: any[];
  urlEmpleado: string;

  constructor(
    id: number,
    nombre: any,
    apellido: any,
    dni: any,
    direccion: any,
    email: any,
    ciudad: any,
    provincia: any,
    servicios: any[],
    urlEmpleado: any
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.dni = dni;
    this.email = email;
    this.ciudad = ciudad;
    this.provincia = provincia;
    this.servicios = servicios;
    this.urlEmpleado = urlEmpleado;
  }
 // getIdEmpleado(urlEmpleado: string): string {
    // urlServicio = urlServicio.slice(0, urlServicio.length - 1)
   // return urlEmpleado.slice(urlEmpleado.lastIndexOf('/') + 1, urlEmpleado.length);
  //}
}
