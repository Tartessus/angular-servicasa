import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NuevoComponent } from './empleados/nuevo/nuevo.component';
import { VerComponent } from './empleados/ver/ver.component';

const routes: Routes = [
  {
    path:'',
  component: EmpleadosComponent,

  children: [
    {
      path: 'nuevo', component: NuevoComponent
    },
    {
      path: 'ver', component: VerComponent
    }
  ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
