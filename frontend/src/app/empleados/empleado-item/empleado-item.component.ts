import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado';
import { EmpleadoImpl } from '../models/empleado-impl';

@Component({
  selector: 'app-empleado-item',
  templateUrl: './empleado-item.component.html',
  styleUrls: ['./empleado-item.component.css']
})
export class EmpleadoItemComponent implements OnInit {
  @Input() empleado: Empleado = new EmpleadoImpl("","","","");
  constructor() { }

  ngOnInit(): void {
  }

}
