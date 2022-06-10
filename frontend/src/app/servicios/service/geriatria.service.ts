import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Geriatria } from '../models/geriatria';
import { GeriatriaImpl } from '../models/geriatria-impl';

@Injectable({
  providedIn: 'root'
})
export class GeriatriaService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}geriatrias`;

    constructor(
      private http: HttpClient,
      private auxService: AuxiliarService) { }


    getGeriatria(): Observable<any> {
      return this.http.get<any>(this.urlEndPoint);
    }

    extraerGeriatria(respuestaApi: any): Geriatria[] {
      const geriatria: Geriatria[] = [];
      respuestaApi.results.forEach((p: any) => {
        geriatria.push(this.mapearGeriatria(p));

      });
      return geriatria;
    }

    mapearGeriatria(geriatriaApi: any): GeriatriaImpl {
      return new GeriatriaImpl(
        geriatriaApi.nombre,
        geriatriaApi.precio,
        geriatriaApi.id,
        geriatriaApi.titulacion,
        geriatriaApi.anosExperiencia
       );
    }

    create(geriatria: Geriatria): void {
      console.log(`Se ha creado el servicio: ${JSON.stringify(geriatria)}`);
    }

    getGeriatriaPagina(pagina: number): Observable<any> {
      return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
    }
  }
