import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tipo } from 'src/app/servicios/models/tipo';
import { EmpleadoImpl } from '../models/empleado-impl';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {

  public empleado : EmpleadoImpl = new EmpleadoImpl(0,'','','','','','', '', [], "")
  //public servicioForm: FormGroup;

  public tipos : Tipo[] = [
    { id: 0, description: 'Elige...' },
    { id: 1, description: 'Madrid' },
    { id: 2, description: 'Toledo' },
    { id: 3, description: 'Segovia' },
    { id: 4, description: 'Guadalajara' }
  ];

  constructor(
    private formBuilder: FormBuilder,
  ) {

 /*   this.servicioForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      materialPropio: [''],
      experiencia: [''],
      titulacion: ['' ],
    }); */
  }

  ngOnInit(): void {
  }

}
