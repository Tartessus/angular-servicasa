import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeriatriaComponent } from './geriatria/geriatria.component';
import { ServiciosComponent } from './servicios/servicios.component';


const routes: Routes = [
  {
    path:'',
  component: ServiciosComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
