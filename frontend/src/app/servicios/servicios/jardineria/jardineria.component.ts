import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jardineria',
  templateUrl: './jardineria.component.html',
  styleUrls: ['./jardineria.component.css']
})
export class JardineriaComponent implements OnInit {
  public jardineriaId = '';
  constructor(activateRoute: ActivatedRoute) {
this.jardineriaId = activateRoute.snapshot.params['Idjardineria'];
  }

  ngOnInit(): void {
  }

}
