import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdicionServiciosComponent } from './edicion-servicios/edicion-servicios.component';
import { GeriatriaComponent } from './geriatria/geriatria.component';
import { JardineriaComponent } from './jardineria/jardineria.component';
import { SeItemComponent } from './servicios-empleado/se-item/se-item.component';
import { ServiciosEmpleadoComponent } from './servicios-empleado/servicios-empleado.component';
import { ServiciosFormComponent } from './servicios-form/servicios-form.component';
import { ServiciosComponent } from './servicios/servicios.component';


const routes: Routes = [
  {
    path:'',
  component: ServiciosComponent,
  },
  {
    path: 'servicios-form',
    component: ServiciosFormComponent,
  },
  {
    path: 'edicion-servicios/:id/:type',
    component: EdicionServiciosComponent,
  },
  {
    path:'geriatrias/:id',
    component:GeriatriaComponent
  },
  {
    path: 'jardinerias/:id',
    component:JardineriaComponent
  },


  {
    path: 'servicios-empleado/:id',
    component: ServiciosEmpleadoComponent,
    children: [
      {
        path: 'servicio-item', component: SeItemComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
