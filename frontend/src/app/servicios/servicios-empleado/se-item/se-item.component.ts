import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioImpl } from '../../models/servicio-impl';

@Component({
  selector: 'app-se-item',
  templateUrl: './se-item.component.html',
  styleUrls: ['./se-item.component.css']
})
export class SeItemComponent implements OnInit {
  @Input() servicio: ServicioImpl = new ServicioImpl(' ', 0, 0,'','');
  servicio$: Observable<any> = new Observable<any>();
  todosServicios: ServicioImpl[] = [];

  constructor(

) { }

  ngOnInit(): void {
  }

  public onSubmit() {


  }

}
