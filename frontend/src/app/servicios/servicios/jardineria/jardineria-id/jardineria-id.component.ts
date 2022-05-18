import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jardineria-id',
  templateUrl: './jardineria-id.component.html',
  styleUrls: ['./jardineria-id.component.css']
})
export class JardineriaIdComponent implements OnInit {
  public jardineriaId = '';

  constructor(activateRoute: ActivatedRoute) {
  this.jardineriaId = activateRoute.snapshot.params['Idjardineria'];

  }
  ngOnInit(): void {
  }

}
