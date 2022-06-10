import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Servicio } from '../models/servicio';
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

  extraerServicios(respuestaApi: any): Servicio[] {
    const servicios: Servicio[] = [];
    respuestaApi.results.forEach((p: any) => {
      servicios.push(this.mapearServicio(p));

    });
    return servicios;
  }

  mapearServicio(servicioApi: any): ServicioImpl {
    return new ServicioImpl(
      servicioApi.nombre,
      servicioApi.precio,
      servicioApi.id
     );
  }

  create(servicio: Servicio): void {
    console.log(`Se ha creado el servicio: ${JSON.stringify(servicio)}`);
  }

  getServiciosPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }
}
