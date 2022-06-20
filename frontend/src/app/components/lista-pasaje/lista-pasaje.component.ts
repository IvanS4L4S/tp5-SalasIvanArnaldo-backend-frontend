import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { Persona } from 'src/app/models/persona';
import { PasajeService } from 'src/app/services/pasaje.service';
import * as printJS from 'print-js';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-lista-pasaje',
  templateUrl: './lista-pasaje.component.html',
  styleUrls: ['./lista-pasaje.component.css']
})
export class ListaPasajeComponent implements OnInit {
  a!:string;
  busqueda!:string;

  categoria!:string;
  persona!:Persona;
  personas!:Array<Persona>;
  pasaje!:Pasaje;
  pasajes!:Array<Pasaje>;
  constructor(private pasajeService:PasajeService,
    private router: Router) { 
      

    }

  recuperarPasajes(){
    this.pasajeService.getPasajes().subscribe(
      result=>{
        
        this.pasajes= new Array<Pasaje>();

        result.forEach((element:any) => {
          this.pasaje=new Pasaje();
          Object.assign(this.pasaje,element);
         this.pasajes.push(this.pasaje);       
        });
        console.log(result);
      
      },
      error=>{
          console.log("error")
      } 
    );
  }

  eliminarPasajero(pasaje:Pasaje){
    this.pasajeService.borrarPasajero(pasaje._id).subscribe(
      result=>{
        if(result.status=="1"){
          //da aviso del estado con una alerta
          Swal.fire({
            icon: 'success',
            title: 'PASAJE ELIMINADO',
            showConfirmButton: false,
            timer: 1500
           });
          this.recuperarPasajes();
        }
      },
      error=>{
        if(error.status=="0"){
          alert(error.msg);
        }
          console.log("error")
      } 
    );

  }

  recuperarFiltroPasaje(){
    this.pasajeService.getPasajeFiltro(this.categoria).subscribe(
      result=>{
        this.pasajes= new Array<Pasaje>();

        result.forEach((element:any) => {
          this.pasaje=new Pasaje();
          Object.assign(this.pasaje,element);
         this.pasajes.push(this.pasaje);       
        });
        console.log(result);
      },
      error=>{

          console.log("error")
      } 
    );

  }




  llamarFormAgregarPasajero(){
    this.router.navigate(['pto3-B', 0])
  }
  
  modificarPasajero(pasaje: Pasaje):void{
    this.router.navigate(["pto3-B", pasaje._id])
  }

  ngOnInit(): void {
  }



}
