import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Empleado } from '../models/empleado';
import { EmpleadoService } from '../service/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: Empleado[] = [];
  todosEmpleados: Empleado[] = [];
  numPaginas: number = 0;

  constructor(
    private empleadoService: EmpleadoService,
    private auxService: AuxiliarService) { }

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe((response) => this.empleados = this.empleadoService.extraerEmpleados(response));
    this.getTodosEmpleados();
  }

  getTodosEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe(r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.empleadoService.getEmpleadosPagina(index)
          .subscribe(response => {
            this.todosEmpleados.push(...this.empleadoService.extraerEmpleados(response));
          });
      }
    });
  }
}
