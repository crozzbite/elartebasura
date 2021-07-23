import { Component, OnInit } from '@angular/core';
import { CuadrosService, Cuadro } from '../cuadros.service';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  cuadros: Cuadro[];

  constructor( private _cuadrosService: CuadrosService ) { 
  }

  ngOnInit(): void {
   this.cuadros = this._cuadrosService.getCuadros();

    console.log(this.cuadros);

  }
}
