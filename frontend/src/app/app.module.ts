import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [  //lugar donde declaro cada uno de los componentes de la aplicación
    AppComponent,
  ],
  imports: [   //importo los elementos que tienen que aparecer al principio, en cada import, aparecen los modulos que cualgan de este módulo
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FontAwesomeModule,
    HttpClientModule,

  ],
  providers: [], //en servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
