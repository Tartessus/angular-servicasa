
import { ServicioImpl } from "./servicio-impl";

export class JardineriaImpl  extends ServicioImpl
 {
  filter(arg0: (m: ServicioImpl) => boolean): JardineriaImpl {
    throw new Error('Method not implemented.');
  }
  materialPropio: boolean;


constructor(nombre: string, precio: number, id: number, empleado: string, urlServicio:string , materialPropio:boolean){
  super(nombre, precio, id, empleado, urlServicio );
  super.tipo=1;
  this.materialPropio =materialPropio
}
getIdJardineria(url: string): string {
  url = url.slice(0, url.length - 1)
  return url.slice(url.lastIndexOf('/') + 1, url.length);
}

}
