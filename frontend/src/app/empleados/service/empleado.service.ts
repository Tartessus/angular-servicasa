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
  getServicios(empeadoId: any) :Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${empeadoId}/servicios`);
  }
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}empleados`;

  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }

    findById(serviceId: any) :Observable<any> {
      return this.http.get<any>(`${this.urlEndPoint}/${serviceId}`);
    }
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
    debugger;
    const url = empleadoApi._links.empleado.href;
    const aux = url.split('/');
    const id = parseInt(aux[aux.length-1]);

 return new EmpleadoImpl(id,empleadoApi.nombreCompleto, empleadoApi.apellido, empleadoApi.dni, empleadoApi.direccion,  empleadoApi.email, empleadoApi.ciudad, empleadoApi.provincia, empleadoApi._links.servicios.href, url)


  }

  postEmpleado(empleado: EmpleadoImpl){
    this.http.post(this.urlEndPoint, empleado).subscribe();
    alert('Se ha creado un nuevo empleado');
  }


 /* create(empleado: Empleado): Observable<any> {

   // console.log(`Se ha creado un nuevo empleado: ${JSON.stringify(empleado)}`);

    return this.http.post(`${this.urlEndPoint}`, empleado).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error('test'));
      })

    );

  } */

  update(empl: EmpleadoImpl, id: number) : Observable<any>  {
    return this.http.put<any>(`${this.urlEndPoint}/${id}`, empl);
  }

  getEmpleadosPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }

  deleteEmpleado(id: number): Observable<Empleado> {
    return this.http.delete<Empleado>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.error.mensaje) {
        //  console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

crearEmpleado(empleado: Empleado): Observable<any>{
  debugger;
  return this.http.post(`${this.urlEndPoint}`, empleado).pipe(
    catchError((e) =>{
      if(e.status ===400) {
        return throwError(()=> new Error (e));
      }
      if(e.roor.mensaje){
      //  console.error(e.error.mensaje);
      }
      return throwError(()=> new Error(e));
    })
    );
}
}
