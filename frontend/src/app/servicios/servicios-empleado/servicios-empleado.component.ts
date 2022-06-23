import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GeriatriaImpl } from '../models/geriatria-impl';
import { JardineriaImpl } from '../models/jardineria-impl';
import { ServicioImpl } from '../models/servicio-impl';
import { GeriatriaService } from '../service/geriatria.service';
import { JardineriaService } from '../service/jardineria.service';
import { ServicioEmpleadoService } from '../service/servicio-empleado.service';
import { ServicioService } from '../service/servicio.service';

@Component({
  selector: 'app-servicios-empleado',
  templateUrl: './servicios-empleado.component.html',
  styleUrls: ['./servicios-empleado.component.css']
})
export class ServiciosEmpleadoComponent implements OnInit {
  @Input() servicio: ServicioImpl = new ServicioImpl(' ', 0, 0,'','');

  servicio$: Observable<any> = new Observable<any>();
  todosServicios: ServicioImpl[] = [];


  constructor(
    private activateRoute: ActivatedRoute,
    private servicioService: ServicioService,
    private serviciosEmpleadoService: ServicioEmpleadoService,
    ) { }

  ngOnInit(): void {
    this.servicio$ = this.cargarServicio();
  }

  public onSubmit() {


  }

  cargarServicio(): any {

  //  console.log('id = ', this.activateRoute.snapshot.params['id']);
   this.serviciosEmpleadoService.getServiciosEmpleado(this.activateRoute.snapshot.params['id']).subscribe(
    (user)=>{
     // console.log(user);
    },
    (error)=>  {
    //  console.error(error);
    }
     );
  }
}
