import { Component, Input, OnInit } from '@angular/core';
import { Geriatria } from '../models/geriatria';
import { GeriatriaImpl } from '../models/geriatria-impl';

@Component({
  selector: 'app-geriatria-item',
  templateUrl: './geriatria-item.component.html',
  styleUrls: ['./geriatria-item.component.css']
})
export class GeriatriaItemComponent implements OnInit {
  @Input() geriatria: Geriatria = new GeriatriaImpl( " ", 0, 0, "", 0 );
  constructor() { }

  ngOnInit(): void {
  }

}
