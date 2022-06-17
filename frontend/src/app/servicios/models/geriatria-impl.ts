
import { ServicioImpl } from "./servicio-impl";

export class GeriatriaImpl extends ServicioImpl  {
  filter(arg0: (m: ServicioImpl) => boolean): GeriatriaImpl {
    throw new Error('Method not implemented.');
  }
  titulacion: string;
  anosExperiencia: number;

  constructor(nombre: string, precio: number, id: number , empleado: string, urlServicio: string , titulacion: string, anosExperiencia: number){
    super(nombre, precio, id, empleado, urlServicio);
    super.tipo=2;
    this.titulacion=titulacion;
    this.anosExperiencia = anosExperiencia;
  }

  getIdJardineria(url: string): string {
    url = url.slice(0, url.length - 1)
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }

}
