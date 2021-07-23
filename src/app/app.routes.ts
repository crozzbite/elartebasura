import {RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { TiendaComponent } from './tienda/tienda.component';
import { AlbumComponent } from './album/album.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { ContactoComponent } from './contacto/contacto.component';



const APP_ROUTES: Routes = [
    {path: 'inicio', component: InicioComponent},
    { path: 'galeria', component:GaleriaComponent },
    {path: 'tienda', component: TiendaComponent},
    { path: 'album', component: AlbumComponent },
    { path: 'contacto', component: ContactoComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});