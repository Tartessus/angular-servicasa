import { Servicio } from "./servicio";

export class ServicioImpl implements Servicio {
  nombre: string;
  precio: number;
  tipo: number;
  id: number;



constructor( nombre: string, precio: number, id: number){
  this.nombre = nombre;
 this.precio = precio;
  this.tipo = 0;  //OJO con esto
  this.id =id;

}

getIdServicio(url: string): string {
  url = url.slice(0, url.length - 1)
  return url.slice(url.lastIndexOf('/') + 1, url.length);
}

}
