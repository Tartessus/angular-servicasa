import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { JardineriaComponent } from './servicios/jardineria/jardineria.component';
import { JardineriaIdComponent } from './servicios/jardineria/jardineria-id/jardineria-id.component';
import { GeriatriaComponent } from './servicios/geriatria/geriatria.component';
import { GeriatriaIdComponent } from './servicios/geriatria/geriatria-id/geriatria-id.component';
import { NuevoComponent } from './servicios/nuevo/nuevo.component';
import { VerComponent } from './servicios/ver/ver.component';

const routes: Routes = [
 {
  path:'',
  component: ServiciosComponent,


  children: [
    {
      path: 'nuevo', component: NuevoComponent
    },
    {
      path: 'ver', component: VerComponent
    },

    {
      path: 'jardineria', component: JardineriaComponent
    },
    {
      path: 'jardineria/:Idjardineria', component: JardineriaIdComponent
    },
    {
    path: 'geriatria', component: GeriatriaComponent
  },
  {
    path: 'geriatria/:Idgeriatria', component: GeriatriaIdComponent
  }
]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
