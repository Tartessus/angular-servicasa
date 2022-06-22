import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faEraser,
  faEye,
  faFilePen,
  faPencil,
  faTrash,
  faTrashCan,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ServicioImpl } from 'src/app/servicios/models/servicio-impl';
import { ServicioService } from 'src/app/servicios/service/servicio.service';
import { Empleado } from '../../models/empleado';
import { EmpleadoImpl } from '../../models/empleado-impl';
import { EmpleadoService } from '../../service/empleado.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  public materialP:any;
  public servicio: ServicioImpl =new ServicioImpl('',0,0,'','')
  @Input() empleado: Empleado = new EmpleadoImpl(
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

  @Input() servicios: any[] = [];

  @Output() servicioSeleccionado = new EventEmitter<ServicioImpl>();
  @Output() servicioEliminar = new EventEmitter<ServicioImpl>();
  @Output() sevicioEditar = new EventEmitter<ServicioImpl>();

  pencil = faPencil;
  mirar = faEye;
  trash = faTrashCan;
  eraser = faEraser;
  trash2 = faTrash;
  x = faX;
  modificar = faFilePen;

  constructor(
    private activateRoute: ActivatedRoute,
    private empleadoService: EmpleadoService,
    private servicioService: ServicioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    debugger;
    console.log(this.empleado.servicios);
  }
  public onSubmit() {}

  borrarServicio(servicio: any): void {
    //    this.negocioService.deleteNegocio(this.negocioItem.urlNegocio);
    if (confirm('Confirme para eliminar')) {
      debugger;
      let url;
      if (servicio._links.geriatria) {
        url = servicio._links.geriatria;
      } else {
        url = servicio._links.jardineria;
      }
      this.servicioEliminar.emit(url.href);
    }
  }
  obtenerServicio() {
    // return this.servicioService.getDatosServicio(String.valueOf(this.servicio.tipo));
  }

  editarServicio(ser:any): void {
    debugger;
    this.servicioSeleccionado.emit(ser);
  }

}
