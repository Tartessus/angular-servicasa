import { Component, Input, OnInit } from '@angular/core';
import { Servicio } from '../../models/servicio';
import { Tipo } from '../../models/tipo';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {


 @Input() public serviciosTotal= 0;

 @Input() public servicio: Servicio = {
   nombre: '',
   precio: 0 ,
   tipo:0,
   materialPropio: false,
   titulacion: "",
   anosExperiencia: 0
  };

  @Input() public tipos: Tipo[] = [
    {id: 0, description: 'Elige Servicio'},
    {id: 1, description: 'Jardineria'},
    {id: 2, description: 'Geriatria'}
  ];

  @Input() public servicios: Servicio[] = [];

  constructor() { }

  ngOnInit(): void {
  }

public saveServicio() {
  this.servicios.push({ ...this.servicio});
  this.serviciosTotal =this.servicios.length;
}

public deleteContact(contact: Servicio) {
  this.servicios = this.servicios.filter(c => c.nombre !== contact.nombre);
  this.serviciosTotal = this.servicios.length;
}

}
