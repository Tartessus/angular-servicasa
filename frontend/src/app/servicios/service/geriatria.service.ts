import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { GeriatriaImpl } from '../models/geriatria-impl';

@Injectable({
  providedIn: 'root',
})
export class GeriatriaService {


  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}geriatrias`;

  constructor(private http: HttpClient, private auxService: AuxiliarService) {}

  getGeriatria(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  findById(serviceId: any) :Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${serviceId}`);
  }

  extraerGeriatria(respuestaApi: any): GeriatriaImpl[] {
    const geriatria: GeriatriaImpl[] = [];
    respuestaApi._embedded.geriatrias.forEach((ge: any) => {
      geriatria.push(this.mapearGeriatria(ge));
    });
    return geriatria;
  }

  mapearGeriatria(geriatriaApi: any): GeriatriaImpl {
    const url = geriatriaApi._links.self.href;
    const aux = url.split('/');
    const id = (aux[aux.length-1]);
    return new GeriatriaImpl(
      geriatriaApi.nombre,
      geriatriaApi.precioBase,
      id,
      geriatriaApi.empleado,
      geriatriaApi.urlServicio,
      geriatriaApi.titulacion,
      geriatriaApi.anosExperiencia
    );
  }

  create(servicio: GeriatriaImpl):  Observable<any>  {
    const url = `${this.host}geriatrias`;

    debugger;
    return this.http.post<any>(url, servicio);
  }
  update(sger: GeriatriaImpl, id: number) : Observable<any>  {
    return this.http.put<any>(`${this.urlEndPoint}/${id}`, sger);
  }

  deleteGeriatria(id: number): Observable<any>{
    return this.http.delete<GeriatriaImpl>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );


  }

  getGeriatriaPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }
}
