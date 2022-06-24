import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tipo } from 'src/app/servicios/models/tipo';
import { EmpleadoImpl } from '../models/empleado-impl';
import { EmpleadoService } from '../service/empleado.service';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css'],
})
export class EmpleadoFormComponent implements OnInit {
  public empleado: EmpleadoImpl = new EmpleadoImpl(
    0,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    [],
    ''
  );
  //public servicioForm: FormGroup;

  public tipos: Tipo[] = [
    { description: 'Madrid' },
    { description: 'Toledo' },
    { description: 'Segovia' },
    { description: 'Guadalajara' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private empleadoService: EmpleadoService,
    private valoracionService: EmpleadoService,
    private router: Router
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

  ngOnInit(): void {}

  create(): void {
   // debugger;
  //  console.log(this.empleado);
    this.empleadoService.crearEmpleado(this.empleado).subscribe();
    this.router.navigate(['/empleados']);

  }

  submit(form:NgForm){
debugger;

  }
}
