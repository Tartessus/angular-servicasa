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
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { GeriatriaImpl } from '../models/geriatria-impl';
import { Servicio } from '../models/servicio';
import { ServicioImpl } from '../models/servicio-impl';
import { ServicioService } from '../service/servicio.service';

@Component({
  selector: 'app-servicios-item',
  templateUrl: './servicios-item.component.html',
  styleUrls: ['./servicios-item.component.css'],
})
export class ServiciosItemComponent implements OnInit {
@Input() servicio: ServicioImpl = new ServicioImpl(' ', 0, 0,'','');

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
    private servicioService: ServicioService,
    private auxService: AuxiliarService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    debugger;
  }

  public onSubmit() {



  }

  borrarServicio(servicio: ServicioImpl["id"]): void {
    //    this.negocioService.deleteNegocio(this.negocioItem.urlNegocio);
    if (confirm('Confirme para eliminar')){
    this.servicioEliminar.emit(this.servicio);


  }
}
obtenerServicio(){
 // return this.servicioService.getDatosServicio(String.valueOf(this.servicio.tipo));
}


  modificarServicio(servicio: ServicioImpl): void {
    this.servicioService.patchServicio(servicio).subscribe();
  }
}
