import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { GeriatriaImpl } from '../models/geriatria-impl';
import { GeriatriaService } from '../service/geriatria.service';

@Component({
  selector: 'app-geriatria',
  templateUrl: './geriatria.component.html',
  styleUrls: ['./geriatria.component.css']
})
export class GeriatriaComponent implements OnInit {
  geriatrias: GeriatriaImpl[] = [];
  todosGeriatria: GeriatriaImpl[] = [];
    numPaginas: number = 0;

    constructor(
  private geriatriaService: GeriatriaService,
  private auxService: AuxiliarService) {}


    ngOnInit(): void {
      this.geriatriaService.getGeriatria().subscribe((response) => this.geriatrias =
      this.geriatriaService.extraerGeriatria(response));
      this.getTodosGeriatria();
    }


    getTodosGeriatria(): void {
      this.geriatriaService.getGeriatria().subscribe(r => {
        this.numPaginas = this.auxService.getPaginasResponse(r);
        for (let index = 1; index <= this.numPaginas; index++) {
          this.geriatriaService.getGeriatriaPagina(index)
            .subscribe(response => {
              this.todosGeriatria.push(...this.geriatriaService.extraerGeriatria(response));
            });
        }
      });
    }

  }
