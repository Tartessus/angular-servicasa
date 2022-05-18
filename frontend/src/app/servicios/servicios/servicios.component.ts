import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
 // personajes: Personaje[] = [];
  //todosPersonajes: Personaje[] = [];
  //numPaginas: number = 0;


  constructor(
    //private personajeService: PersonajeService,
    //private auxService: AuxiliarService
    ) {}
  ngOnInit(): void {
   // this.personajeService.getPersonajes().subscribe((response) => this.personajes = this.personajeService.extraerPersonajes(response));
    //this.getTodosPersonajes();
  }
 /*
  getTodosPersonajes(): void  {
    this.personajeService.getPersonajes().subscribe(r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.personajeService.getPersonajesPagina(index)
          .subscribe(response => {
            this.todosPersonajes.push(...this.personajeService.extraerPersonajes(response));
          });
      }
    });
  }*/

}
