import { Empleado } from "./empleado";

export class EmpleadoImpl  implements Empleado{
  nombre: string
  //apellido: string;
 // direccion: string;
 dni: string;
 email: string;
  ciudad: string;
 // provincia: string;
  //servicios: any[];

constructor(nombre: any, dni: any,  email: any, ciudad: any,){
  this.nombre=nombre;
 this.dni= dni;
  this.email = email;
  this.ciudad = ciudad;
}

/*constructor(nombre: any, apellido: any, dirección:any, email: any, ciudad: any, provincia: any, servicios: any[]){
  this.nombre=nombre;
  this.apellido = apellido;
  this.direccion = dirección;
  this.email = email;
  this.ciudad = ciudad;
  this.provincia = provincia;
  this.servicios = servicios;
}*/

getIdX(url: string): string {
  url = url.slice(0, url.length - 1)
  return url.slice(url.lastIndexOf('/') + 1, url.length);
}


}
