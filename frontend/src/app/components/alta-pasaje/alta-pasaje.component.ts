import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';


import { Persona } from 'src/app/models/persona';
import { PasajeService } from 'src/app/services/pasaje.service';
import Swal from 'sweetalert2';


const PRECIO:number=2000;
@Component({
  selector: 'app-alta-pasaje',
  templateUrl: './alta-pasaje.component.html',
  styleUrls: ['./alta-pasaje.component.css']
})
export class AltaPasajeComponent implements OnInit {
  accion="";
  precioPasaje:number = 3000;




  descuentos!:number;

  pasaje!:Pasaje;
  pasajes!:Array<Pasaje>;

  persona!:Persona;
  personas!:Array<Persona>;


  constructor(private pasajeService:PasajeService,
    private router:Router,
    private activatedRoute: ActivatedRoute
   ) { 

 //  this.mostrasTodosLosPasajes();
 
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0"){
        this.accion = "new";
        this.cargarPersonas();
        this.iniciarPasaje();///
      }else{
        this.accion = "update";
    //    this.cargarPersonas();
      this.cargarPasaje(params['id']);
      }
    });
  }

 async cargarPasaje(id:string){

    this.pasaje=new Pasaje();
    
    this.pasajeService.getPasajeA(id).subscribe(
      result=>{
       Object.assign(this.pasaje,result);
       console.log(result);
       //carga de persona
       this.pasajeService.getPersonas().subscribe(
        result=>{
          this.personas = new Array<Persona>();
    
          result.forEach((element:any) => {
            this.persona=new Persona();
            Object.assign(this.persona,element);
           this.personas.push(this.persona);       
          });
          this.pasaje.pasajero=this.personas.find((item)=>(item._id==this.pasaje.pasajero._id))!; 
          console.log(result);
        },
        error=>{
            console.log("error")
        } 
      );
       //
       this.pasaje.pasajero=this.personas.find((item)=>(item._id==this.pasaje.pasajero._id))!; 
      },
      error=>{
          console.log("error")
      } 
      );

  }
 




cargarPersonas(){
  this.pasajeService.getPersonas().subscribe(
    result=>{
      this.personas = new Array<Persona>();

      result.forEach((element:any) => {
        this.persona=new Persona();
        Object.assign(this.persona,element);
       this.personas.push(this.persona);       
      });
      console.log(result);
    },
    error=>{
        console.log("error")
    } 
  );
}


guardarPasajero(pasaje:NgForm){
  this.pasaje.precioPasaje=this.precioPasaje;
  console.log(this.pasaje.precioPasaje)
  this.pasajeService.altaPasaje(this.pasaje).subscribe(
    result=>{
      if(result.status=="1"){
        //da aviso del estado con una alerta
        Swal.fire({
          icon: 'success',
          title: result.msg,
          showConfirmButton: false,
          timer: 1500
        });
        pasaje.reset();  
 //   this.mostrasTodosLosPasajes();
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

cambiarPrecio(){
  this.precioPasaje=PRECIO;
  switch (this.pasaje.categoriaPasajero) {
    case "menor":
         this.precioPasaje = (this.precioPasaje * 25)/100;  
      break;
    case "adulto": 
        this.precioPasaje=PRECIO;
        break;
    case "jubilado":
        this.precioPasaje = (this.precioPasaje * 50)/100;
          break;
    default:
      break;
  }
}

actualizarPasajero(pasaje:NgForm){
  this.pasajeService.actualizarPasaje(this.pasaje).subscribe(
    result=>{
      if(result.status=="1"){
        //da aviso del estado con una alerta
        Swal.fire({
          icon: 'success',
          title: 'PASAJE ACTUALIZADO',
          showConfirmButton: false,
          timer: 1500
         });
         pasaje.reset(); 
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






mostrasTodosLosPasajes(){
  this.pasajes= new Array<Pasaje>();
  this.pasajeService.getPasajes().subscribe(
    result=>{
      var unPasaje=new Pasaje();
      result.forEach((element:any) => {
        Object.assign(unPasaje,element);
       this.pasajes.push(unPasaje);
       unPasaje=new Pasaje();       
      });
      console.log(result);
    },
    error=>{
        console.log("error")
    } 
  );
}

iniciarPasaje(){
  this.pasaje=new Pasaje();
}

volver(){
  this.router.navigate(['pto3-A'])
}


}
