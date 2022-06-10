import { Jardineria } from "./jardineria";
import { ServicioImpl } from "./servicio-impl";

export class JardineriaImpl  extends ServicioImpl implements Jardineria
 {
  materialPropio: boolean;


constructor(nombre: string, precio: number, id: number, materialPropio: boolean){
  super(nombre, precio, id);
  super.tipo=2;
  this.materialPropio =materialPropio
}
getIdJardineria(url: string): string {
  url = url.slice(0, url.length - 1)
  return url.slice(url.lastIndexOf('/') + 1, url.length);
}

}
