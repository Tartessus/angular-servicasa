

export class ServicioImpl {
  nombre: string;
  precioBase: number;
  tipo: number;
  id: number;
  urlServicio: string;

  constructor(nombre: string, precioBase: number, id: number, urlServicio: string) {
    this.nombre = nombre;
    this.precioBase = precioBase;
    this.tipo = 0; //OJO con esto
    this.id = id;
    this.urlServicio = urlServicio;
  }

  getIdSevicio(urlServicio: string): string {
    // urlServicio = urlServicio.slice(0, urlServicio.length - 1)
    return urlServicio.slice(urlServicio.lastIndexOf('/') + 1, urlServicio.length);
  }


}
