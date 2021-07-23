import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuadrosService {

  private cuadros: Cuadro [] = [
// cuadros es el arreglo con todos los  Cuadro    Cuado[] es una clase y es un solo valor del arreglo  
    {
      nombre: 'axolotl',
      dimencion: '10 x 100 cm',
      tecnica: 'oleo/tela',
      precio: 10000,
      album: 'ancestral',
      foto: 'assets/img/cuadros-cortados/axolotl-c.jpg',
      ids: 1,
    

    },

    {
      nombre: 'no hay oscuridad sin luz ni luz sin oscuridad',
      dimencion: '40.5 x 50 cm',
      tecnica: 'óleo/tela',
      precio: 5000,
      album: 'retratos',
      foto: 'assets/img/cuadros-cortados/linda-c.jpg',
      ids: 2,
    },

  

    {
      nombre: 'añoranza',
      dimencion: '50 x 40 cm',
      tecnica: 'óleo/tela',
      precio: 8000,
      album: 'ancestral',
      foto: 'assets/img/cuadros-cortados/anoranza-c.jpg',
      ids: 3,

    },

    {
      nombre: 'r3d',
      dimencion: '40.5 x 50 cm',
      tecnica: 'óleo/tela',
      precio: 5000,
      album: 'retratos',
      foto: 'assets/img/cuadros-cortados/r3d-c.jpg',
      ids: 4,
    },

    {
      nombre: 'ensoñación',
      dimencion: '36 x 26 cm',
      tecnica: 'óleo/tela',
      precio: 3000,
      album: 'retratos',
      foto: 'assets/img/cuadros-cortados/ensonacion-c.jpg',
      ids: 5,

    },
  
    {
      nombre: 'renacimiento interno',
      dimencion: '71.5 x 86.5 cm',
      tecnica: 'óleo/tela',
      precio: 10000,
      album: 'ancestral',
      foto: 'assets/img/cuadros-cortados/renacimiento-interno-c.jpg',
      ids: 6,

    },

    {
      nombre: 'childhood end',
      dimencion: '50 x 50 cm',
      tecnica: 'mixta/madera',
      precio: 4000,
      album: 'retrato',
      foto: 'assets/img/cuadros-cortados/childhood-end-c.jpg',
      ids: 7,

    },

    {
      nombre: 'estúpido cupido',
      dimencion: '36 x 26 cm', // falta
      tecnica: 'óleo/tela',
      precio: 5000,
      album: 'ancestral',
      foto: 'assets/img/cuadros-cortados/estupido-cupido-c.jpg',
      ids: 8,

    },

    {
      nombre: 'el hilo rojo del destino',
      dimencion: '150 x 40.5 cm',
      tecnica: 'óleo/tela',
      precio: 10000,
      album: 'ancestral',
      foto: 'assets/img/cuadros-cortados/hilo-rojo-c.jpg',
      ids: 9,

    },

    {
      nombre: 'serpiente de maiz',
      dimencion: '94 x 63 cm',
      tecnica: 'óleo/tela',
      precio: 10000,
      album: 'ancestral',
      foto: 'assets/img/cuadros-cortados/serpiente-de-maiz-c.jpg',
      ids: 10,

    },
    
    {
      nombre: 'balance-interior-c',
      dimencion: '70 x 90 cm',
      tecnica: 'óleo/tela',
      precio: 6000,
      album: 'retrato',
      foto: 'assets/img/cuadros-cortados/balance-interior-c.jpg',
      ids: 11,


    },

    {
      nombre: 'el fuego fatuo de la exitencia',
      dimencion: '53 x 67.5 cm',
      tecnica: 'mixta/papel',
      precio: 7000,
      album: 'ancestral',
      foto: 'assets/img/cuadros-cortados/el-fuego-fatuo-de-la-existencia-c.jpg',
      ids: 12,

    },

    {
      nombre: 'hermitaños de los suburbios',
      dimencion: '135 x 135 cm',
      tecnica: 'óleo/tela',
      precio: 13000,
      album: 'ancestral',
      foto: 'assets/img/cuadros-cortados/hermitanos-de-los-suburbios-c.jpg',
      ids: 13,


    },

    {
      nombre: 'florecimiento interno',
      dimencion: '105 x 141 cm',
      tecnica: 'óleo/tela',
      precio: 12000,
      album: 'ancestral',
      foto: 'assets/img/cuadros-cortados/florecimiento-interno-c.jpg',
      ids: 14,

    },

    {
      nombre: 'el blues del alma',
      dimencion: '135 x 135 cm', //falta
      tecnica: 'óleo/tela',
      precio: 4000,
      album: 'retrato',
      foto: 'assets/img/cuadros-cortados/el-blues-del-alma-c.jpg',
      ids: 15,

    },

    {
      nombre: 'corvus-corax',
      dimencion: '90 X 70 cm',// largo x ancho
      tecnica: 'óleo/tela',
      precio: 12000,
      album: 'Ancestral',
      foto: 'assets/img/cuadros-cortados/corvus-corax-c.jpg',
      ids: 16,

    },

    {
      nombre: 'kundalini',
      dimencion: '40.5 x 50 cm',
      tecnica: 'óleo/tela',
      precio: 4000,
      album: 'ancestral',
      foto: 'assets/img/cuadros-cortados/kundalini-c.jpg',
      ids: 17,

    },

    {
      nombre: 'mujer madera',
      dimencion: '135 x 135 cm',//falta
      tecnica: 'mixta/melamina',
      precio: 20000,
      album: 'reciclados',
      foto: 'assets/img/cuadros-cortados/mujer-madera-c.jpg',
      ids: 18,

    },

    {
      nombre: 'la embriagues del octil',
      dimencion: '50.5 x 45 cm',
      tecnica: 'mixta/papel',
      precio: 3000,
      album: 'Ancestral',
      foto: 'assets/img/cuadros-cortados/la-embriagues-del-octli-c.jpg',
      ids: 19,

    },
    

    {
      nombre: 'el ojo y la seña',
      dimencion: '135 x 135 cm',//falta
      tecnica: 'mixta/papel',
      precio: 7000,
      album: 'Ancestral',
      foto: 'assets/img/cuadros-cortados/el-ojo-y-la-sena-c.jpg',
      ids: 20,

    },

    {
      nombre: 'ojos de tlatoani',
      dimencion: '50.5 x 60 cm',
      tecnica: 'mixta/papel',
      precio: 4000,
      album: 'Ancestral',
      foto: 'assets/img/cuadros-cortados/ojos-de-tlatoani-c.jpg',
      ids: 21,

    },

    {
      nombre: 'sin titulo',
      dimencion: '65 x 60.5 cm',
      tecnica: 'mixta/papel',
      precio: 3000,
      album: 'retrato',
      foto: 'assets/img/cuadros-cortados/sin-titulo-c.jpg',
      ids: 22,

    },

    {
      nombre: 'el rastro de tu perfume',
      dimencion: '50.5 x 65 cm',
      tecnica: 'mixta/papel',
      precio: 5000,
      album: 'ancestral',
      foto: 'assets/img/cuadros-cortados/corazon-flor-c.jpg',
      ids: 23,

    },

    {
      nombre: 'el pecoyote',
      dimencion: '50.5 x 65 cm',//falta
      tecnica: 'mixta/papel',
      precio: 1500,
      album: 'ancestral',
      foto: 'assets/img/cuadros-cortados/el-pecoyote-c.jpg',
      ids: 24,

    },

    {
      nombre: 'pezkeletor',
      dimencion: ' 65 x 50.5 cm',
      tecnica: 'mixta/papel',
      precio: 1000,
      album: 'ancestral',
      foto: 'assets/img/cuadros-cortados/pezkeletor-c.jpg',
      ids: 25,

    },

    {
      nombre: 'musculos',
      dimencion: '65 x 50.5 cm',
      tecnica: 'mixta/papel',
      precio: 5000,
      album: 'ancestral',
      foto: 'assets/img/cuadros-cortados/musculos-c.jpg',
      ids: 26,

    },

    {
      nombre: 'tigre',
      dimencion: '65 x 50.5 cm',
      tecnica: 'óleo/papel',
      precio: 5000,//vendido
      album: 'retratos',
      foto: 'assets/img/cuadros-cortados/tigre-c.jpg',
      ids: 27,

    },

    {
      nombre: 'toro',
      dimencion: '65 x 50.5 cm',
      tecnica: 'carboncillo/papel',
      precio: 5000,//vendido
      album: 'bocetos',
      foto: 'assets/img/cuadros-cortados/toro-c.jpg',
      ids: 28,
    },


    

   
  ];
  
  constructor(){
    console.log('servicio listo para usar');
  }

  getCuadros(): Cuadro[]{
    return this.cuadros;
}
}



export interface Cuadro{ // estas son las propiedades que se pueden mandar
  //  y recivir del arreglo el ? es de que la propiedad es opcional
  nombre: string;
  dimencion: string;
  tecnica: string;
  precio: number;
  album: string;
  foto: string;
  ids: number;
}
