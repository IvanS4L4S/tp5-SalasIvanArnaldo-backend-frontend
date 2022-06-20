import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LibroComponent } from './components/libro/libro.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { AltaDeLibroComponent } from './components/alta-de-libro/alta-de-libro.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaDivisaComponent } from './components/lista-divisa/lista-divisa.component';
import { DivisaComponent } from './components/divisa/divisa.component';
import { ListaPasajeComponent } from './components/lista-pasaje/lista-pasaje.component';
import { AltaPasajeComponent } from './components/alta-pasaje/alta-pasaje.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    FooterComponent,
    NavComponent,
    AltaDeLibroComponent,
 
    ListaDivisaComponent,
    DivisaComponent,
    ListaPasajeComponent,
    AltaPasajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //supongo que es el cliente
    FormsModule,  //para los formularios
  //  ReactiveFormsModule //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
