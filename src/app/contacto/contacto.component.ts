import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  constructor() { 

  }
  onSubmit(contactForm: NgForm){
  //  aqui poner la funcion que se conecta con el servicio de mi correo para mandar la informacion 
// talves con un http get o con un servicio 
 }


  



}
