import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEraser, faEye, faFilePen, faPencil, faTrash, faTrashCan, faX } from '@fortawesome/free-solid-svg-icons';
import { Empleado } from '../models/empleado';
import { EmpleadoImpl } from '../models/empleado-impl';

@Component({
  selector: 'app-empleado-item',
  templateUrl: './empleado-item.component.html',
  styleUrls: ['./empleado-item.component.css']
})
export class EmpleadoItemComponent implements OnInit {
  @Input() empleado: Empleado = new EmpleadoImpl(0, "","","","","","","",[], "");
  @Output() empleadoSeleccionado = new EventEmitter<Empleado>();
  @Output() empleadoEliminar = new EventEmitter<EmpleadoImpl>();
  @Output() empleadoEditar = new EventEmitter<EmpleadoImpl>();


  pencil = faPencil;
  mirar = faEye;
  trash = faTrashCan;
  eraser = faEraser;
  trash2 = faTrash;
  x = faX;
  modificar = faFilePen;
  empleadoService: any;
  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit() {

  }

  borrarEmpleado(empleado: EmpleadoImpl["id"]): void {
    //    this.negocioService.deleteNegocio(this.negocioItem.urlNegocio);
    if (confirm('Confirme para eliminar')){
    this.empleadoEliminar.emit(this.empleado);


  }
}
obtenerEmpleado(){
 // return this.servicioService.getDatosServicio(String.valueOf(this.servicio.tipo));
}


  modificarServicio(servicio: EmpleadoImpl): void {
    this.empleadoService.patchServicio(servicio).subscribe();
  }

}
