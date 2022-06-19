import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { GeriatriaService } from '../service/geriatria.service';
import { JardineriaService } from '../service/jardineria.service';
import { ServicioImpl } from '../models/servicio-impl';
import { JardineriaImpl } from '../models/jardineria-impl';
import { GeriatriaImpl } from '../models/geriatria-impl';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  todosServicios: ServicioImpl[] = [];

  public geriatria: GeriatriaImpl = new GeriatriaImpl('', 0, 0, '', '','', 0);
  public jardineria: JardineriaImpl = new JardineriaImpl('', 0, 0, '','', false);

  constructor(
    private jardineriaService: JardineriaService,
    private geriatriaService: GeriatriaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    debugger;
    this.getTodosServicios();
  }

  getTodosServicios(): void {
    this.todosServicios = [];
    this.geriatriaService.getGeriatria().subscribe((response) => {
      debugger;
      this.todosServicios.push(

        ...this.geriatriaService.extraerGeriatria(response)
      );

      this.jardineriaService.getJardineria().subscribe((response) => {
        debugger;
        this.todosServicios.push(
          ...this.jardineriaService.extraerJardineria(response)
        );
      });
    });
  }

  onServicioEliminar(servicio: ServicioImpl) {
    if (servicio.tipo === 2) {
      this.geriatriaService
        .deleteGeriatria(servicio.id)
        .subscribe((response) => {
               this.getTodosServicios();
        });
    } else {
      this.jardineriaService
        .deleteJardineria(servicio.id)
        .subscribe((response) => {
                  this.getTodosServicios();
        });
    }
  }
}
