import { Component, OnInit } from '@angular/core';

import { CuadrosService, Cuadro } from '../cuadros.service';




@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
// elemento(osea variable) para guardar el servicio de los cuadros 
  Cuadro:any [] = [];
  mostrar = 0 ;
  loading: boolean;
  
  constructor(private _cuadosService:CuadrosService ) {

   }

// servicio para tomar los cuadros y poder verlos 
  ngOnInit(): void {
   
  //  function resolveAfter2Seconds() {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve('resolved');
  //     }, 2000);
  //   });
  // }
    this.Cuadro = this._cuadosService.getCuadros();
      
    
    this.loading = false;
  
  }



  // metodos(osea funciones) de abrir y cerrar ** no se si se vallan a necesitar opoup

  
// esto 
// evento para abrir o cerrar el modal !aun no se si lo usare 

// solo tienes que saber que poner en ves de item !!!!


  modal(event, ids){
    this.loading = true;
    console.log(ids);
    // this.mostrar=ids;
    return ids;
  }

  atras(){
    this.mostrar=0;
  }

  // siguiente(event, id):void{
  //   this.mostrar=id+1;
  // }


    // if(item.classList.contains("active")){
    //    item.classList.remove("active"));
    // }else{
    //    item.classList.add("active"));
    // }

 
  // creo un obgeto para poder manpularlo

  // this.ngbModalref

}
