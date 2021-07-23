import { Component, OnInit } from '@angular/core';
import { CuadrosService, Cuadro } from '../cuadros.service';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  Cuadro:any [] = [];
  constructor(private _cuadosService:CuadrosService ) {
    console.log("constructor")
   }
  ngOnInit(): void {
    this.Cuadro = this._cuadosService.getCuadros();

    console.log(this.Cuadro);
  }

}
