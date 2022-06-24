import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tipo } from 'src/app/servicios/models/tipo';
import { EmpleadoImpl } from '../models/empleado-impl';
import { EmpleadoService } from '../service/empleado.service';

@Component({
  selector: 'app-empleado-edicion',
  templateUrl: './empleado-edicion.component.html',
  styleUrls: ['./empleado-edicion.component.css']
})
export class EmpleadoEdicionComponent implements OnInit {
  public empleado: EmpleadoImpl = new EmpleadoImpl(0, "","","","","","","",[], "");

  public tipos : Tipo[] = [
    { description: 'Elige...' },
    { description: 'Madrid' },
    {  description: 'Toledo' },
    {  description: 'Segovia' },
    {  description: 'Guadalajara' }
  ];

  public servicioForm: FormGroup;
  type: number = 0;
  id: number = 0;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private empleadoService: EmpleadoService) {
      this.servicioForm = this.formBuilder.group({
        name: ['', Validators.required],
        price: ['', Validators.required],
        materialPropio: [''],
        experiencia: [''],
        titulacion: ['' ],
      })
     }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.type = parseInt(this.route.snapshot.params['type']);
    //console.log(this.id);
   // console.log(this.type);




    this.empleadoService.findById(this.id).subscribe(
      (service)=>{

     //   console.log(service);
        this.servicioForm = this.formBuilder.group({
          name: [service.nombre, Validators.required],
          price: [service.precioBase, Validators.required],
          anosExperiencia: [service.anosExperiencia, Validators.required],
          titulacion: [service.titulacion,Validators.required ],
        });
      },
     (error)=> {
    //  console.error(error);
     });

  }

  public onSubmit() {


    const servicioEntity = this.servicioForm.value;

    if (confirm('¿Realmente quiere modificar el elemento elemento?')){

    if (!this.servicioForm.invalid) {

        const sger: EmpleadoImpl = new EmpleadoImpl(
         servicioEntity.id,
          servicioEntity.nombre,
          servicioEntity.apellido,
          servicioEntity.direcion,
          servicioEntity.dni,
          servicioEntity.email,
          servicioEntity.ciudad,
          servicioEntity.provincia,
          servicioEntity.servicios ,
          servicioEntity.urlEmpleado );
          this.empleadoService.update(sger,this.id ).subscribe(
            () => {

           //   console.log('OK');
            },
            (error:any) => {
          //    console.error(error);
            }

        );
      }
    }
    }
  }





