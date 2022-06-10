import { Component, Input, OnInit } from '@angular/core';
import { Jardineria } from '../models/jardineria';
import { JardineriaImpl } from '../models/jardineria-impl';

@Component({
  selector: 'app-jardineria-item',
  templateUrl: './jardineria-item.component.html',
  styleUrls: ['./jardineria-item.component.css']
})
export class JardineriaItemComponent implements OnInit {
  @Input() jardineria: Jardineria = new JardineriaImpl( " ", 0, 0, false );
  constructor() { }

  ngOnInit(): void {
  }

}
