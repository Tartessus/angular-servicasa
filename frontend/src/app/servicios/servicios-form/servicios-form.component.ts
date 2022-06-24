import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
 //public geriatria: GeriatriaImpl = new GeriatriaImpl('', 0, 0, '','',"",0);
  public servicio: ServicioImpl = new ServicioImpl('', 0, 0, '','');
  public geriatria: GeriatriaImpl = new GeriatriaImpl('', 0, 0, '','',"",0);
  public jardineria: JardineriaImpl = new JardineriaImpl('', 0, 0, '','',false);
  public servicioForm: FormGroup;
  private host: string = environment.host;
  public urlEndPoint: string = `${this.host}empleados`;
public submit:boolean = false;
  public empleados: EmpleadoImpl[] = [];


  public tipos: Tipo[] = [
    {  description: 'Elige Servicio' },
    { description: 'Jardineria' },
    {  description: 'Geriatria' },
  ];

  public titulacion: Titulacion[] = [

    {  description: 'ESO' },
    {  description: 'Modulo Enfermeria' },
    {  description: 'Enfermeria' },
    {  description: 'Modulo Geriatria' },
  ];



  constructor(
    private formBuilder: FormBuilder,
    private empleadoService: EmpleadoService,
    private geriatriaService: GeriatriaService,
    private jardineriaService: JardineriaService,
    private router: Router
  ) {
    this.servicioForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      materialPropio: [''],
      experiencia: [''],
      titulacion: [''],
      empleado:['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe(
      (response) => {
        this.empleados = this.empleadoService.extraerEmpleados(response);

      },
      (error) => {
     //   console.error(error);
      }
    );
  }

  get form() {
    return this.servicioForm;
  }

  public onSubmit() {


    this.submit = true;

    const servicioEntity = this.servicioForm.value;

  //  if (confirm('Realmente quiere añadir un nuevo elemento')) {

      if (!this.servicioForm.invalid) {
        if (this.servicioForm.value.type == 'Geriatria') {
          const sger: GeriatriaImpl = new GeriatriaImpl(
            servicioEntity.name,
            servicioEntity.price,
            0,
            servicioEntity.empleado,
            servicioEntity.url,
            servicioEntity.titulacion,
            servicioEntity.experiencia
          );
          this.geriatriaService.create(sger).subscribe(
            () => {
            //  console.log('OK');
            },
            (error: any) => {
            //  console.error(error);
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
             // console.log('OK');
            },
            (error) => {
          //    console.error(error);
            }
          );
        }
        this.router.navigate(['/servicios']);
      }

   // }

    //se para aqui si el formulario es invalido
    if (this.servicioForm.invalid) {
      return ;
    }
    //display si hay exito
   // alert(
   //   'GUARDADO CON EXITO :-)' /* +
    //    JSON.stringify(this.servicioForm.value, null, 4)*/
   // );

    console.warn('Your order has been submitted', customerData);
  }

  OnReset() {
    this.submit = false;
    this.servicioForm.reset();
  }

  cambiaTipo(event: any) {
    const val = event.currentTarget.value;
    //console.log(this.servicioForm.value.type);

    if (this.servicioForm.value.type == 'Geriatria') {
      this.servicioForm = this.formBuilder.group({
        type: [this.servicioForm.value.type, [Validators.required]],
        name: [
          this.servicioForm.value.name,[
            Validators.required,
            Validators.maxLength(20),
            Validators.minLength(3),
          ]

        ],
        price: [
          this.servicioForm.value.price, [
          Validators.required,
          Validators.min(0),
          this.precioLimite,
        ]
        ],
        materialPropio: [''],
        experiencia: [
          '', [
          Validators.required,
          Validators.min(0),
          Validators.max(10),
          ]
        ],
        titulacion: [this.servicioForm.value.titulacion,  [
          Validators.required] ],
        empleado: [this.servicioForm.value.empleado,  [
           Validators.required ]
          ]
      });
    } else {
      this.servicioForm = this.formBuilder.group({
        type: [this.servicioForm.value.type, Validators.required],
        name: [
          this.servicioForm.value.name,[
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
          ]
        ],
        price: [
          this.servicioForm.value.price,  [
          Validators.required,
          Validators.min(0),
          this.precioLimite,
          ]
        ],
        materialPropio: [
          this.servicioForm.value.materialPropio, [
          Validators.required,
          ]
        ],
        experiencia: [''],
        titulacion: [''],
        empleado: [this.servicioForm.value.empleado, [
          Validators.required]
        ]
      });
    }
  }

  private precioLimite(control: AbstractControl) {
    const precio = control.value;
    let error = null;
    if (this.servicio.precioBase < 0) {
      error = { error, valor: "el valor tiene q ser positivo" };
    }

    return error;
  }

}



function customerData(arg0: string, customerData: any) {
  throw new Error('Function not implemented.');
}
