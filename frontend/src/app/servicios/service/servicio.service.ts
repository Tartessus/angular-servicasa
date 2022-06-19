import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';

import { ServicioImpl } from '../models/servicio-impl';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
 private host: string = environment.host;
private urlEndPoint: string = `${this.host}servicios`;

  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }


  getServicios(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  mapearServicio(servicioApi: any): ServicioImpl {
    return new ServicioImpl(
      servicioApi.nombre,
      servicioApi.precio,
      servicioApi.id,
      servicioApi.empleado,
      servicioApi._links.self.href
     );
  }

  create(servicio: ServicioImpl): void {
    console.log(`Se ha creado el servicio: ${JSON.stringify(servicio)}`);
  }

  getServiciosPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }

  deleteServicio(direccionEliminar: string): Observable<any>{
    return this.http.delete(direccionEliminar);
  }

 // Para cargar en modal
 getDatosServicio(direccionConsulta: string){
  this.http.get(direccionConsulta).subscribe();
}

//para editar
patchServicio(servicio: ServicioImpl) {
  return this.http.patch<any>(`${this.urlEndPoint}/${servicio.id}`, servicio);
}


}
