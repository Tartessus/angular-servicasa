import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Geriatria } from '../models/geriatria';
import { Jardineria } from '../models/jardineria';
import { Servicio } from '../models/servicio';

import { ServicioService } from '../service/servicio.service';
import { GeriatriaService } from '../service/geriatria.service';
import { JardineriaService } from '../service/jardineria.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
servicios: Servicio[] = [];
jardinerias: Jardineria[] = [];
geriatrias: Geriatria[] = [];
todosServicios: Servicio[] = [];
  numPaginas: number = 0;

  constructor(
private servicioService: ServicioService,
private auxService: AuxiliarService) {}


  ngOnInit(): void {
    this.servicioService.getServicios().subscribe((response) => this.servicios = this.servicioService.extraerServicios(response));
    this.getTodosServicios();
  /*  this.geriatriaService.getGeriatria().subscribe((response) => this.geriatrias =
    this.geriatriaService.extraerGeriatria(response));
    this.getTodosGeriatria();*/
  }


  getTodosServicios(): void {
    this.servicioService.getServicios().subscribe(r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.servicioService.getServiciosPagina(index)
          .subscribe(response => {
            this.todosServicios.push(...this.servicioService.extraerServicios(response));
          });
      }
    });
  }


  /*verDatos(maletaBarco: Maletabarco) : void {
    this.maletaBarcoVerDatos = maletaBarco;
    // this.router.navigate([`maletasbarco/${maletaBarco.id}`]);

  }

  verDatosC(maletaCabina: Maletacabina) : void {
    this.maletaCabinaVerDatos = maletaCabina;
    // this.router.navigate([`maletascabina/${maletaCabina.id}`]);

  }

  registrarMaletaBarco() {
    this.router.navigate([`maletas/barco-form`])
  }

  onMaletaBarcoEliminar(maleta : Maletabarco){
    this.maletaService.deleteMaletaB(maleta.id).subscribe(response => {
      this.router.navigate(['maletas']);
      this.maletasBarco = this.maletasBarco.filter(m => maleta !== m)
      location.reload;
    });
  }
  onMaletaCabinaEliminar(maleta : Maletacabina){
    this.maletaService.deleteMaletaC(maleta.id).subscribe(response => {
      this.router.navigate(['maletas']);
      this.maletasCabina = this.maletasCabina.filter(m => maleta !== m)
      location.reload;
    });
  }

  onMaletaBarcoEditar(maleta: Maletabarco){
    let url = `maletas/barco-form/${maleta.id}`;
    this.router.navigate([url])
  }
*/


}
