import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { GeriatriaImpl } from '../models/geriatria-impl';
import { JardineriaImpl } from '../models/jardineria-impl';
import { GeriatriaService } from '../service/geriatria.service';
import { JardineriaService } from '../service/jardineria.service';
import { ServicioEmpleadoService } from '../service/servicio-empleado.service';

@Component({
  selector: 'app-edicion-servicios',
  templateUrl: './edicion-servicios.component.html',
  styleUrls: ['./edicion-servicios.component.css']
})
export class EdicionServiciosComponent implements OnInit {

  public servicioForm: FormGroup;
  type: number = 0;
  id: number = 0;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private geriatriaService: GeriatriaService,
    private jardineriaService: JardineriaService) {
      this.servicioForm = this.formBuilder.group({
        name: ['', Validators.required],
        price: ['', Validators.required],
        materialPropio: [''],
        experiencia: [''],
        titulacion: ['' ],
      })
     }

  ngOnInit(): void {
    debugger;
    this.id = this.route.snapshot.params['id'];
    this.type = parseInt(this.route.snapshot.params['type']);
    console.log(this.id);
    console.log(this.type);

    if(this.type === 2){


    this.geriatriaService.findById(this.id).subscribe(
      (service)=>{
        debugger;
        console.log(service);

        this.servicioForm = this.formBuilder.group({
          name: [service.nombre, Validators.required],
          price: [service.precioBase, Validators.required],
          experiencia: [service.anosExperiencia, Validators.required],
          titulacion: [service.titulacion,Validators.required ],
        });
      },
     (error)=> {
      console.error(error);
     });
    }else{


      this.jardineriaService.findById(this.id).subscribe(
        (service)=>{
          debugger;
          console.log(service);

          this.servicioForm = this.formBuilder.group({
            name: [service.nombre, Validators.required],
            price: [service.precioBase, Validators.required],
            materialPropio: [service.materialPropio.toString() , Validators.required],
          });
        },
       (error)=> {
        console.error(error);
       });
    }
  }

  public onSubmit() {
    debugger;

    const servicioEntity = this.servicioForm.value;
    debugger;
    if (confirm('¿Realmente quiere modificar el elemento elemento?')){
      debugger;
    if (!this.servicioForm.invalid) {
      if (this.type == 2) {
        const sger: GeriatriaImpl = new GeriatriaImpl(
          servicioEntity.name,
          servicioEntity.price,
          0,
          servicioEntity.empleado,
          servicioEntity.url,
          servicioEntity.titulacion ,
          servicioEntity.anosExperiencia );
          this.geriatriaService.update(sger,this.id ).subscribe(
            () => {
              debugger;
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
          servicioEntity.empleado,
          servicioEntity.url,
          servicioEntity.materialPropio
        );
        this.jardineriaService.update(sjar, this.id).subscribe(
          () => {
            debugger;
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


}


