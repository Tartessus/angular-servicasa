import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  public empleado = {
    nombre: "",
    apellido: "",
    direccion:'',
    email1:'',
    email2:'',
    ciudad:'',
    provincia:0,
  }

  public tipos = [
    { description: 'Elige...'},
    { description: 'Madrid'},
    { description: 'Toledo'},
    { description: 'Segovia'},
    { description: 'Guadalajara'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
