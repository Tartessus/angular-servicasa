import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { EmpleadosComponent } from './empleados/empleados.component';
import { VerComponent } from './empleados/ver/ver.component';
import { NuevoComponent } from './empleados/nuevo/nuevo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmpleadosComponent,
    VerComponent,
    NuevoComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    FormsModule
  ]
})
export class EmpleadosModule { }
