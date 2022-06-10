import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios/servicios.component';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';
import { ServiciosItemComponent } from './servicios-item/servicios-item.component';
import { GeriatriaComponent } from './geriatria/geriatria.component';
import { GeriatriaItemComponent } from './geriatria-item/geriatria-item.component';
import { JardineriaItemComponent } from './jardineria-item/jardineria-item.component';
import { JardineriaComponent } from './jardineria/jardineria.component';



@NgModule({
  declarations: [
    ServiciosComponent,
    ServiciosItemComponent,
    GeriatriaComponent,
    GeriatriaItemComponent,
    JardineriaItemComponent,
    JardineriaComponent,

  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    FormsModule
  ],
  providers: [AuxiliarService]
})
export class ServiciosModule { }
