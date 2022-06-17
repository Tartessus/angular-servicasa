import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios/servicios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';
import { ServiciosItemComponent } from './servicios-item/servicios-item.component';
import { GeriatriaComponent } from './geriatria/geriatria.component';
import { GeriatriaItemComponent } from './geriatria-item/geriatria-item.component';
import { JardineriaItemComponent } from './jardineria-item/jardineria-item.component';
import { JardineriaComponent } from './jardineria/jardineria.component';
import { ServiciosFormComponent } from './servicios-form/servicios-form.component';
import { ServiciosEmpleadoComponent } from './servicios-empleado/servicios-empleado.component';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import { EdicionServiciosComponent } from './edicion-servicios/edicion-servicios.component';
import { SeItemComponent } from './servicios-empleado/se-item/se-item.component'



@NgModule({
  declarations: [
    ServiciosComponent,
    ServiciosItemComponent,
    GeriatriaComponent,
    GeriatriaItemComponent,
    JardineriaItemComponent,
    JardineriaComponent,
    ServiciosFormComponent,
    ServiciosEmpleadoComponent,
    EdicionServiciosComponent,
    SeItemComponent,

  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule, CommonModule,

  ],
  providers: [AuxiliarService],
  bootstrap: []
})
export class ServiciosModule { }
