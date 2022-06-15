import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EmpleadoImpl } from '../../models/empleado-impl';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  @Input() empleado: Empleado = new EmpleadoImpl(0,"","","","","","","",[]);
  @Output() empleadoEliminar = new EventEmitter<EmpleadoImpl>();
  constructor() { }

  ngOnInit(): void {
  }
  eliminar(): void {
    this.empleadoEliminar.emit(this.empleado);
  }
}
