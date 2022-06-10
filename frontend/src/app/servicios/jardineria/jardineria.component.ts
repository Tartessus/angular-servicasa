import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Jardineria } from '../models/jardineria';
import { JardineriaService } from '../service/jardineria.service';

@Component({
  selector: 'app-jardineria',
  templateUrl: './jardineria.component.html',
  styleUrls: ['./jardineria.component.css']
})
export class JardineriaComponent implements OnInit {
  jardinerias: Jardineria[] = [];
  todosJardineria: Jardineria[] = [];
    numPaginas: number = 0;

    constructor(
  private jardineriaService: JardineriaService,
  private auxService: AuxiliarService) {}


    ngOnInit(): void {
      this.jardineriaService.getJardineria().subscribe((response) => this.jardinerias =
      this.jardineriaService.extraerJardineria(response));
      this.getTodosJardineria();
    }


    getTodosJardineria(): void {
      this.jardineriaService.getJardineria().subscribe(r => {
        this.numPaginas = this.auxService.getPaginasResponse(r);
        for (let index = 1; index <= this.numPaginas; index++) {
          this.jardineriaService.getJardineriaPagina(index)
            .subscribe(response => {
              this.todosJardineria.push(...this.jardineriaService.extraerJardineria(response));
            });
        }
      });
    }

  }

