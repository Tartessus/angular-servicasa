import { Component, Input, OnInit } from '@angular/core';
import { Servicio } from '../models/servicio';
import { ServicioImpl } from '../models/servicio-impl';

@Component({
  selector: 'app-servicios-item',
  templateUrl: './servicios-item.component.html',
  styleUrls: ['./servicios-item.component.css']
})
export class ServiciosItemComponent implements OnInit {
  @Input() servicio: Servicio = new ServicioImpl( " ", 0, 0 );

  constructor() { }

  ngOnInit(): void {
  }

}
