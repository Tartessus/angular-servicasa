import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Jardineria } from '../models/jardineria';
import { JardineriaImpl } from '../models/jardineria-impl';

@Injectable({
  providedIn: 'root'
})
export class JardineriaService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}jardinerias`;

    constructor(
      private http: HttpClient,
      private auxService: AuxiliarService) { }


    getJardineria(): Observable<any> {
      return this.http.get<any>(this.urlEndPoint);
    }

    extraerJardineria(respuestaApi: any): Jardineria[] {
      const jardineria: Jardineria[] = [];
      respuestaApi.results.forEach((p: any) => {
        jardineria.push(this.mapearJardineria(p));

      });
      return jardineria;
    }

    mapearJardineria(jardineriaAPI: any): JardineriaImpl {
      return new JardineriaImpl(
        jardineriaAPI.nombre,
        jardineriaAPI.precio,
        jardineriaAPI.id,
        jardineriaAPI.materialPropio
       );
    }

    create(servicio: Jardineria): void {
      console.log(`Se ha creado el servicio: ${JSON.stringify(servicio)}`);
    }

    getJardineriaPagina(pagina: number): Observable<any> {
      return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
    }
  }
