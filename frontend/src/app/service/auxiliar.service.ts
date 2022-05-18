import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuxiliarService {


  constructor(
    private http: HttpClient) { }

 /* getItemsResponse(respuestaApi: any): number {
    return respuestaApi.count;
  }



  getItemsPorPagina(urlEndPoint: string, pagina: number): Observable<any> {
    return this.http.get<any>(`${urlEndPoint}?page=${pagina}`)
  }*/
}
