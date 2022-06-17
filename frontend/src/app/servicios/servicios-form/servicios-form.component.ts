import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { EmpleadoImpl } from 'src/app/empleados/models/empleado-impl';
import { EmpleadoService } from 'src/app/empleados/service/empleado.service';
import { environment } from 'src/environments/environment';
import { GeriatriaImpl } from '../models/geriatria-impl';
import { JardineriaImpl } from '../models/jardineria-impl';
import { ServicioImpl } from '../models/servicio-impl';
import { Tipo } from '../models/tipo';
import { Titulacion } from '../models/titulacion';
import { GeriatriaService } from '../service/geriatria.service';
import { JardineriaService } from '../service/jardineria.service';

@Component({
  selector: 'app-servicios-form',
  templateUrl: './servicios-form.component.html',
  styleUrls: ['./servicios-form.component.css'],
})
export class ServiciosFormComponent implements OnInit {
  public servicio: ServicioImpl = new ServicioImpl('', 0, 0, '','');
  public servicioForm: FormGroup;
  private host: string = environment.host;
  public urlEndPoint: string = `${this.host}empleados`;

  public empleados: EmpleadoImpl[] = [];

  //public empleadoNombre:

  public tipos: Tipo[] = [
    { id: 0, description: 'Elige Servicio' },
    { id: 1, description: 'Jardineria' },
    { id: 2, description: 'Geriatria' },
  ];

  public titulacion: Titulacion[] = [
    { id: 0, description: 'Elige Titulacion' },
    { id: 1, description: 'ESO' },
    { id: 2, description: 'Modulo Enfermeria' },
    { id: 3, description: 'Enfermeria' },
    { id: 4, description: 'Modulo Geriatria' },
  ];
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private empleadoService: EmpleadoService,
    private geriatriaService: GeriatriaService,
    private jardineriaService: JardineriaService
  ) {
    this.servicioForm = this.formBuilder.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      materialPropio: [''],
      experiencia: [''],
      titulacion: [''],
      empleado:['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe(
      (response) => {
        this.empleados = this.empleadoService.extraerEmpleados(response);
        debugger;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  get form() {
    return this.servicioForm.controls;
  }

  public onSubmit() {
    debugger;

    this.submitted = true;

    const servicioEntity = this.servicioForm.value;
    debugger;
    if (confirm('Realmente quiere añadir un nuevo elemento')) {
      debugger;
      if (!this.servicioForm.invalid) {
        if (this.servicioForm.value.type == 2) {
          const sger: GeriatriaImpl = new GeriatriaImpl(
            servicioEntity.name,
            servicioEntity.price,
            0,
            servicioEntity.empleado,
            servicioEntity.url,
            servicioEntity.titulacion,
            servicioEntity.anosExperiencia
          );
          this.geriatriaService.create(sger).subscribe(
            () => {
              console.log('OK');
            },
            (error: any) => {
              console.error(error);
            }
          );
        } else {
          const sjar: JardineriaImpl = new JardineriaImpl(
            servicioEntity.name,
            servicioEntity.price,
            0,
            servicioEntity.empleado,
            servicioEntity.url,
            servicioEntity.materialPropio
          );
          this.jardineriaService.create(sjar).subscribe(
            () => {
              console.log('OK');
            },
            (error) => {
              console.error(error);
            }
          );
        }
      }
    }

    //se para aqui si el formulario es invalido
    if (this.servicioForm.invalid) {
      return;
    }
    //display si hay exito
    alert(
      'GUARDADO CON EXITO :-)' +
        JSON.stringify(this.servicioForm.value, null, 4)
    );

    console.warn('Your order has been submitted', customerData);
  }

  OnReset() {
    this.submitted = false;
    this.servicioForm.reset();
  }

  cambiaTipo(event: any) {
    const val = event.currentTarget.value;
    console.log(this.servicioForm.value.type);
    debugger;
    if (this.servicioForm.value.type == 2) {
      this.servicioForm = this.formBuilder.group({
        type: [this.servicioForm.value.type, Validators.required],
        name: [
          this.servicioForm.value.name,
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
        ],
        price: [
          this.servicioForm.value.price,
          Validators.required,
          Validators.min(0),
        ],
        materialPropio: [''],
        experiencia: [
          this.servicioForm.value.experiencia,
          Validators.required,
          Validators.min(0),
          Validators.max(10),
        ],
        titulacion: [this.servicioForm.value.titulacion, Validators.required],
        empleado: [this.servicioForm.value.empleado, Validators.required]
      });
    } else {
      this.servicioForm = this.formBuilder.group({
        type: [this.servicioForm.value.type, Validators.required],
        name: [
          this.servicioForm.value.name,
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
        ],
        price: [
          this.servicioForm.value.price,
          Validators.required,
          Validators.min(0),
        ],
        materialPropio: [
          this.servicioForm.value.materialPropio,
          Validators.required,
        ],
        experiencia: [''],
        titulacion: [''],
        empleado: [this.servicioForm.value.empleado, Validators.required]
      });
    }
  }

  /* serviciosForm: FormGroup;
  hasError = false;
  message: string;
  submit = false;

  constructor(private formBuilder: FormBuilder,
    private serviciosService: ServicioService) { }

  ngOnInit() {
    this.serviciosForm = this.formBuilder.group({
      name: ['', Validators.required],
      acronym: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.serviciosForm;
  }

  onSubmit() {
    this.submit = true;
    if (!this.serviciosForm.invalid) {
      const serviciosEntity = this.serviciosForm.value;

      const formData: FormData = new FormData();
      formData.append('name', serviciosEntity.name);
      formData.append('acronym', serviciosEntity.acronym);

      this.serviciosService.addServicio(formData).subscribe(
        (res: MessageResponse) => {
          this.setMessage(res);
        },
        (res: MessageResponse) => {
          this.setMessage(res);
        }
      );
    }
  }

  private setMessage(res: MessageResponse) {
    this.hasError = res.hasError;
    this.message = res.message;
  }*/
}
function customerData(arg0: string, customerData: any) {
  throw new Error('Function not implemented.');
}
