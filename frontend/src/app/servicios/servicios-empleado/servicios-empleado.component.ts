import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicioEmpleadoService } from '../service/servicio-empleado.service';
import { ServicioService } from '../service/servicio.service';

@Component({
  selector: 'app-servicios-empleado',
  templateUrl: './servicios-empleado.component.html',
  styleUrls: ['./servicios-empleado.component.css']
})
export class ServiciosEmpleadoComponent implements OnInit {
  servicio$: Observable<any> = new Observable<any>();

  constructor(
    private activateRoute: ActivatedRoute,
    private servicioService: ServicioService,
    private serviciosEmpleadoService: ServicioEmpleadoService) { }

  ngOnInit(): void {
    this.servicio$ = this.cargarServicio();
  }

  cargarServicio(): any {

    console.log('id = ', this.activateRoute.snapshot.params['id']);
   this.serviciosEmpleadoService.getServiciosEmpleado(this.activateRoute.snapshot.params['id']).subscribe(
    (user)=>{
      console.log(user);
    },
    (error)=> {console.error(error);}   );
  }
}
