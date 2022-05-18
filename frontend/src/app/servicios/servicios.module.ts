import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios/servicios.component';
import { GeriatriaIdComponent } from './servicios/geriatria/geriatria-id/geriatria-id.component';
import { GeriatriaComponent } from './servicios/geriatria/geriatria.component';
import { JardineriaIdComponent } from './servicios/jardineria/jardineria-id/jardineria-id.component';
import { JardineriaComponent } from './servicios/jardineria/jardineria.component';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';
import { NuevoComponent } from './servicios/nuevo/nuevo.component';
import { VerComponent } from './servicios/ver/ver.component';



@NgModule({
  declarations: [
    ServiciosComponent,
    JardineriaComponent,
    GeriatriaComponent,
    JardineriaIdComponent,
    GeriatriaIdComponent,
    NuevoComponent,
    VerComponent,

  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    FormsModule
  ],
  providers: [AuxiliarService]
})
export class ServiciosModule { }
