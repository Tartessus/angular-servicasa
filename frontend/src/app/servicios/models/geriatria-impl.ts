import { Geriatria } from "./geriatria";
import { ServicioImpl } from "./servicio-impl";

export class GeriatriaImpl extends ServicioImpl implements Geriatria {
  titulacion: string;
  anosExperiencia: number;

  constructor(nombre: string, precio: number, id: number , titulacion: string,anosExperiencia: number){
    super(nombre, precio, id);
    super.tipo=1;
    this.titulacion=titulacion;
    this.anosExperiencia = anosExperiencia;
  }

  getIdJardineria(url: string): string {
    url = url.slice(0, url.length - 1)
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }

}
