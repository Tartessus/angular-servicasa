import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { GeriatriaImpl } from '../models/geriatria-impl';
import { JardineriaImpl } from '../models/jardineria-impl';
import { ServicioImpl } from '../models/servicio-impl';
import { Tipo } from '../models/tipo';
import { GeriatriaService } from '../service/geriatria.service';
import { JardineriaService } from '../service/jardineria.service';

@Component({
  selector: 'app-servicios-form',
  templateUrl: './servicios-form.component.html',
  styleUrls: ['./servicios-form.component.css'],
})
export class ServiciosFormComponent implements OnInit {
  public servicio: ServicioImpl = new ServicioImpl('', 0, 0, '');
  public servicioForm: FormGroup;

  public tipos: Tipo[] = [
    { id: 0, description: 'Elige Servicio' },
    { id: 1, description: 'Jardineria' },
    { id: 2, description: 'Geriatria' },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private geriatriaService: GeriatriaService,
    private jardineriaService: JardineriaService,

  ) {
    this.servicioForm = this.formBuilder.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      materialPropio: [''],
      experiencia: [''],
      titulacion: ['' ],
    });
  }

  ngOnInit(): void {}

  public onSubmit() {
    debugger;

    const servicioEntity = this.servicioForm.value;
    debugger;
    if (confirm('Realmente quiere añadir un nuevo elemento')){
      debugger;
    if (!this.servicioForm.invalid) {
      if (this.servicioForm.value.type == 2) {
        const sger: GeriatriaImpl = new GeriatriaImpl(
          servicioEntity.name,
          servicioEntity.price,
          0,
          servicioEntity.url,
          servicioEntity.titulacion ,
          servicioEntity.anosExperiencia );
          this.geriatriaService.create(sger).subscribe(
            () => {
              console.log('OK');
            },
            (error:any) => {
              console.error(error);
            }
          );
      } else {
        const sjar: JardineriaImpl = new JardineriaImpl(
          servicioEntity.name,
          servicioEntity.price,
          0,
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
  }

  cambiaTipo(event: any) {
    const val = event.currentTarget.value;
    console.log(this.servicioForm.value.type);
    debugger;
    if (this.servicioForm.value.type == 2) {
      this.servicioForm = this.formBuilder.group({
        type: [this.servicioForm.value.type, Validators.required],
        name: [this.servicioForm.value.name, Validators.required],
        price: [this.servicioForm.value.price, Validators.required],
        materialPropio: [''],
        experiencia: [this.servicioForm.value.experiencia,Validators.required],
        titulacion: [this.servicioForm.value.titulacion,Validators.required ],
      });
    }else{
      this.servicioForm = this.formBuilder.group({
        type: [this.servicioForm.value.type, Validators.required],
        name: [this.servicioForm.value.name, Validators.required],
        price: [this.servicioForm.value.price, Validators.required],
        materialPropio: [this.servicioForm.value.materialPropio, Validators.required],
        experiencia: [''],
        titulacion: ['' ],
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
