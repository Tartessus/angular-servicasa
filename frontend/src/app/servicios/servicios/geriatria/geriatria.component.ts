import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-geriatria',
  templateUrl: './geriatria.component.html',
  styleUrls: ['./geriatria.component.css']
})
export class GeriatriaComponent implements OnInit {
  public geriatriaId = '';
  constructor(activateRoute: ActivatedRoute) {
this.geriatriaId = activateRoute.snapshot.params['Idgeriatria'];
  }

  ngOnInit(): void {
  }

}
