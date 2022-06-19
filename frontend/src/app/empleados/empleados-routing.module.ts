import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoEdicionComponent } from './empleado-edicion/empleado-edicion.component';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NuevoComponent } from './empleados/nuevo/nuevo.component';
//import { VerComponent } from './empleados/ver/ver.component';

const routes: Routes = [
  {
    path:'',
  component: EmpleadosComponent,

  children: [
    {
      path: 'nuevo', component: NuevoComponent
    },

  ]

  },
  {
    path:'empleado-form',
  component: EmpleadoFormComponent,
  },
  {
    path:'empleado-edicion/:id',
  component: EmpleadoEdicionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
