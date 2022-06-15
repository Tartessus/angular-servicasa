import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoComponent } from '../empleados/empleados/nuevo/nuevo.component';
import { VerComponent } from '../empleados/empleados/ver/ver.component';
import { EdicionServiciosComponent } from './edicion-servicios/edicion-servicios.component';
import { GeriatriaComponent } from './geriatria/geriatria.component';
import { JardineriaComponent } from './jardineria/jardineria.component';
import { ServiciosEmpleadoComponent } from './servicios-empleado/servicios-empleado.component';
import { ServiciosFormComponent } from './servicios-form/servicios-form.component';
import { ServiciosComponent } from './servicios/servicios.component';


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
    }
  ]
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
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
