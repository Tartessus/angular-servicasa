import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Empleado } from '../models/empleado';
import { EmpleadoImpl } from '../models/empleado-impl';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}empleados`;

  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }


  getEmpleados(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerEmpleados(respuestaApi: any): Empleado[] {
    const empleados: Empleado[] = [];
    respuestaApi._embedded.empleados.forEach((p: any) => {   //mirar si fallo aqui
      empleados.push(this.mapearEmpleados(p));

    });
    return empleados;
  }

  mapearEmpleados(empleadoApi: any): EmpleadoImpl {
 return new EmpleadoImpl(empleadoApi.nombreCompleto, empleadoApi.apellido, empleadoApi.dni, empleadoApi.direccion,  empleadoApi.email, empleadoApi.ciudad, empleadoApi.provincia, empleadoApi.servicios)


  }

  create(empleado: Empleado): void {
    console.log(`Se ha creado un nuevo empleado: ${JSON.stringify(empleado)}`);
  }

  getEmpleadosPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }

  deleteEmpleado(id: string): Observable<Empleado> {
    return this.http.delete<Empleado>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }


}
