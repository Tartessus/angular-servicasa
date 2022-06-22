import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Empleado } from '../models/empleado';
import { EmpleadoImpl } from '../models/empleado-impl';
import { EmpleadoService } from '../service/empleado.service';
import { Router } from '@angular/router';
import { ServicioImpl } from 'src/app/servicios/models/servicio-impl';
import { JardineriaService } from 'src/app/servicios/service/jardineria.service';
import { GeriatriaService } from 'src/app/servicios/service/geriatria.service';
import { ServicioService } from 'src/app/servicios/service/servicio.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}empleados`;
 // private  urlServicio: any;

 @ViewChild('btn',{static: false}) btn!:ElementRef;
  empleados: Empleado[] = [];
  todosEmpleados: Empleado[] = [];
  numPaginas: number = 0;
  empleadoVerDatos: Empleado = new EmpleadoImpl(
    0,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    [],
    ''
  );
  servicios: any[] = [];

  constructor(
    private servicioService: ServicioService,
    private jardineriaService: JardineriaService,
    private geriatriaService: GeriatriaService,
    private empleadoService: EmpleadoService,
    private auxService: AuxiliarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe((response) => {
      this.empleados = this.empleadoService.extraerEmpleados(response);
      debugger;
    });
    this.getTodosEmpleados();
  }

  closeModal(ser:any){
    debugger;
    this.btn.nativeElement.click();
    this.router.navigate([`/servicios/edicion-servicios/${ser.id}/${ser.tipo}`]);
  }

  addServicio(){
    this.btn.nativeElement.click();
    this.router.navigate([`/servicios/servicios-form`]);
  }

  verDatos(empleado: Empleado): void {
    debugger;
    this.empleadoVerDatos = empleado;
  }

  onEmpleadoEliminar(empleado: EmpleadoImpl): void {
    console.log(`He eliminado a ${empleado.nombre}`);
    this.empleadoService.deleteEmpleado(empleado.id).subscribe((response) => {
      //  this.router.navigate(['empleados']);
      //this.empleados = this.empleados.filter(p => empleado !== p)
      //location.reload;
      this.getTodosEmpleados();
    });
  }

  getTodosEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe((r) => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.empleadoService.getEmpleadosPagina(index).subscribe((response) => {
          this.todosEmpleados.push(
            ...this.empleadoService.extraerEmpleados(response)
          );
        });
      }
    });
  }

  /*onServicioEliminar(empleado: EmpleadoImpl) {
    this.empleadoService.deleteEmpleado(empleado.id).subscribe((response) => {
      //this.router.navigate(['servicios']);
      /this.geriatria = this.geriatria.filter(
            (m: ServicioImpl) => servicio !== m
          );
      this.getTodosEmpleados();
    });
  }*/

  verServicios(empleado: EmpleadoImpl) {
    debugger;
    this.empleadoVerDatos = empleado;
    this.servicios = [];

    this.empleadoService.getServicios(empleado.id).subscribe(
      (servicios) => {
        debugger;
        if (servicios._embedded.geriatrias) {


          servicios._embedded.geriatrias.forEach((s: any) => {
            debugger;
            s.id=this.getServiceId(s._links.geriatria.href);
            s.tipo = 2;
            this.servicios.push(s);
          });
        }
        if (servicios._embedded.jardinerias) {
          servicios._embedded.jardinerias.forEach((s: any) => {
            debugger;
            s.id= this.getServiceId(s._links.jardineria.href);
            s.tipo = 1;
            this.servicios.push(s);
          });
        }
      },
      (error) => {
        console.error(error);
      }
    )

  }

  getServiceId(url: string):number{
    debugger
    const aux = url.split('/');
    const id = parseInt(aux[aux.length-1]);

    return id;
  }

  onServicioEliminar(url: any) {


    debugger;
    this.servicioService.deleteServicio(url).subscribe(
      (response) => {
        debugger;
      this.verServicios(this.empleadoVerDatos);
      },
      (error)=> {
        console.log(error);
      });
  }

}
