import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { convertToParamMap, Router } from '@angular/router';
import { Divisa } from 'src/app/models/divisa';
import { DivisaService } from 'src/app/services/divisa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-divisa',
  templateUrl: './divisa.component.html',
  styleUrls: ['./divisa.component.css']
})
export class DivisaComponent implements OnInit {

  valor!:string;
  from_value!:string;
  from_type!:string;
  to_type!:string;

  divisa!:Divisa;
  constructor(private divisaService:DivisaService,
    private router: Router) {
    this.divisa=new Divisa();
   }


  cotizar(){
    this,this.divisaService.convertMoney(this.from_value,this.from_type,this.to_type).subscribe(
      result=>{
        this.valor=result.result;
        console.log("donde valor="+this.from_value+" donde tipo="+this.from_type+" tipo="+this.to_type);
        console.log(this.valor + "valor");
         
        this.cargarDivisa();
      
        
        
      },
      error=>{
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          showConfirmButton: false,
          timer: 1500
         });
      } 
    );
  }

  cargarDivisa(){
 
    this.divisa.cantidadOrigen=parseInt(this.from_value);
    this.divisa.monedaOrigen=this.from_type;
    this.divisa.cantidadDestino=parseInt(this.valor);//this.cantidadDestino;
    this.divisa.monedaDestino=this.to_type;
    this.divisa.tasaConversion=parseInt(this.valor);//Number(this.valor);
   
    this.divisaService.altaDivisa(this.divisa).subscribe(
      (result)=>{
        if(result.status=="1"){
          //da aviso del estado con una alerta
          Swal.fire({
           icon: 'success',
           title: result.msg,
           showConfirmButton: false,
           timer: 1500

          });
          console.log()
          this.llamarListaDivisa();
          
        }
      },
      error=>{
        if(error.status=="0"){
          alert(error.msg);
        }
    } 
    );
  }

  ngOnInit(): void {
  }

  llamarListaDivisa(){
    this.router.navigate(['lista divisa', 0])
  }
}
