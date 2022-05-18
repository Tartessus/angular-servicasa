import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  public servicio = { nombre: '',
   precio: '',
   tipo:0,
   materialPropio: false,
   titulacion: "",
   anosExperiencia: ""
  };

  public tipos = [
    {id: 0, description: 'Elige Servicio'},
    {id: 1, description: 'Jardineria'},
    {id: 2, description: 'Geriatria'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
