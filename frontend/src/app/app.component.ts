import { Component } from '@angular/core';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //Indica la ubicación de la plantilla HTML, si esta fuera corta, se podría poner todo aquí, pero con la etiqueta Template, en vezde TemplateURL
  styleUrls: ['./app.component.css'] //Indica la ubicación de la plantilla CSS, Style, valdria para escribirlo desde aquí
})



export class AppComponent {
  faSkype = faSkype;

  faCorreo = faEnvelope;

  faLlamada = faPhone;

  faCoffee = faCoffee;

  title = 'frontend';
  saludo = 'boli es un coñazo';
}
