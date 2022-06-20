import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibroComponent } from './components/libro/libro.component';
import { RouterModule, Routes } from '@angular/router';
import { AltaDeLibroComponent } from './components/alta-de-libro/alta-de-libro.component';
import { DivisaComponent } from './components/divisa/divisa.component';
import { ListaDivisaComponent } from './components/lista-divisa/lista-divisa.component';
import { ListaPasajeComponent } from './components/lista-pasaje/lista-pasaje.component';
import { AltaPasajeComponent } from './components/alta-pasaje/alta-pasaje.component';


const routes: Routes = [

  
  
  {path: 'slider' , component:LibroComponent},
  {path: 'altaDeLibro' , component:AltaDeLibroComponent},
  {path: 'divisa' , component:DivisaComponent},
  {path: 'lista divisa' , component:ListaDivisaComponent},
  {path: 'pto3-A' , component:ListaPasajeComponent},
  {path: 'pto3-B/:id' , component:AltaPasajeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
