import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { EmpleadosComponent } from './empleados/empleados.component';
import { VerComponent } from './empleados/ver/ver.component';
import { NuevoComponent } from './empleados/nuevo/nuevo.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoItemComponent } from './empleado-item/empleado-item.component';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';
import { AuxiliarService } from '../service/auxiliar.service';


@NgModule({
  declarations: [
    EmpleadosComponent,
    VerComponent,
    NuevoComponent,
    EmpleadoItemComponent,
    EmpleadoFormComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    FormsModule
  ],
  providers: [AuxiliarService]
})
export class EmpleadosModule { }
