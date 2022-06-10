import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Empleado } from '../models/empleado';
import { EmpleadoImpl } from '../models/empleado-impl';
import { EmpleadoService } from '../service/empleado.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: Empleado[] = [];
  todosEmpleados: Empleado[] = [];
  numPaginas: number = 0;
  empleadoVerDatos: Empleado = new EmpleadoImpl("","","","","","","",[]);

  constructor(
    private empleadoService: EmpleadoService,
    private auxService: AuxiliarService) { }

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe((response) => this.empleados = this.empleadoService.extraerEmpleados(response));
    this.getTodosEmpleados();
  }

  verDatos(empleado: Empleado): void {
    this.empleadoVerDatos = empleado;
  }

 /*  onEmpleadoEliminar(empleado: EmpleadoImpl): void {
    console.log(`He eliminado a ${empleado.nombre}`);
    this.empleadoService.deleteEmpleado(empleado.id).subscribe(response => {
      this.router.navigate(['empleados']);
    this.empleados = this.empleados.filter(p => empleado !== p)
    location.reload;
  }
}*/

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
