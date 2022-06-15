import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {

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
    {id: 0, description: 'Elige...'},
    {id: 1, description: 'Madrid'},
    {id: 2, description: 'Toledo'},
    {id: 3, description: 'Segovia'},
    {id: 4, description: 'Guadalajara'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
