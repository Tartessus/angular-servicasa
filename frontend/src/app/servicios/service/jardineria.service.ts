import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { JardineriaImpl } from '../models/jardineria-impl';

@Injectable({
  providedIn: 'root',
})
export class JardineriaService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}jardinerias`;

  constructor(private http: HttpClient, private auxService: AuxiliarService) {}

  getJardineria(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  findById(serviceId: any) :Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${serviceId}`);
  }

  extraerJardineria(respuestaApi: any): JardineriaImpl[] {
    const jardineria: JardineriaImpl[] = [];
    debugger;
    respuestaApi._embedded.jardinerias.forEach((ja: any) => {
      jardineria.push(this.mapearJardineria(ja));
    });
    debugger;
    return jardineria;
  }

  mapearJardineria(jardineriaAPI: any): JardineriaImpl {
    debugger;
    const url = jardineriaAPI._links.self.href;
    const aux = url.split('/');
    const id = (aux[aux.length - 1]);
    return new JardineriaImpl(
      jardineriaAPI.nombre,
      jardineriaAPI.precioBase,
      id,
      url,
      jardineriaAPI.urlServicio,
      jardineriaAPI.materialPropio
    );
  }

  create(servicio: JardineriaImpl):  Observable<any>  {
    const url = `${this.host}jardinerias`;

    debugger;
    return this.http.post<any>(url, servicio);
  }

  update(sjar: JardineriaImpl, id: number) : Observable<any>  {
    return this.http.put<any>(`${this.urlEndPoint}/${id}`, sjar);
  }

  deleteJardineria(id: number): Observable<any>{
    return this.http.delete<JardineriaImpl>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );


  }

  getJardineriaPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }
}
