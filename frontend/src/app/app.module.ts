import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { EmpleadosModule } from './empleados/empleados.module';
import { ServiciosModule } from './servicios/servicios.module';
import { EdicionEmpleadosComponent } from './empleador/edicion-empleados/edicion-empleados.component';






@NgModule({
  declarations: [  //lugar donde declaro cada uno de los componentes de la aplicación
    AppComponent, EdicionEmpleadosComponent,
  ],
  imports: [   //importo los elementos que tienen que aparecer al principio, en cada import, aparecen los modulos que cualgan de este módulo
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EmpleadosModule,
    ServiciosModule

  ],
  providers: [], //en servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
