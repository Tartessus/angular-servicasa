import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadoService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}empleados/`;
  constructor(private http: HttpClient) { }

  getServiciosEmpleado(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}${id}`);
  }
}
