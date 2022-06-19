import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { EmpleadosComponent } from './empleados/empleados.component';
//import { VerComponent } from './empleados/ver/ver.component';
import { NuevoComponent } from './empleados/nuevo/nuevo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoItemComponent } from './empleado-item/empleado-item.component';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';
import { AuxiliarService } from '../service/auxiliar.service';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmpleadoEdicionComponent } from './empleado-edicion/empleado-edicion.component';


@NgModule({
  declarations: [
    EmpleadosComponent,
 //   VerComponent,
    NuevoComponent,
    EmpleadoItemComponent,
    EmpleadoFormComponent,
    EmpleadoComponent,
    EmpleadoEdicionComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [AuxiliarService]
})
export class EmpleadosModule { }
