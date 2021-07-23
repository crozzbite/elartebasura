import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas
import { APP_ROUTING } from './app.routes';
//  iconos
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


// servicios
import { CuadrosService } from './cuadros.service';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { SliderComponent } from './slider/slider.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { TiendaComponent } from './tienda/tienda.component';
import { AlbumComponent } from './album/album.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { LoadingComponent } from './shared/loading/loading.component'; 

// // lightbox
// import 'hammerjs';
// import 'mousetrap';
// import {ModalGalleryModule} from 'angular-modal-gallery';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    SliderComponent,
    GaleriaComponent,
    TiendaComponent,
    AlbumComponent,
    ContactoComponent,
    FooterComponent,
    LightboxComponent,
    LoadingComponent,
    // ModalGalleryModule.forRoot(),
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    APP_ROUTING
  ],
  providers: [CuadrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
