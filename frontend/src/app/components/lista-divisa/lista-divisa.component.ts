import { Component, OnInit } from '@angular/core';
import { Divisa } from 'src/app/models/divisa';
import { DivisaService } from 'src/app/services/divisa.service';

@Component({
  selector: 'app-lista-divisa',
  templateUrl: './lista-divisa.component.html',
  styleUrls: ['./lista-divisa.component.css']
})
export class ListaDivisaComponent implements OnInit {
  email!:string;
  origen!:string;
  destino!:string;
  divisa!:Divisa;
  divisas!:Array<Divisa>;
  constructor(private divisaService:DivisaService) { 
  }

  recuperarTodo(){
    this.divisaService.getTransacciones().subscribe(
      result=>{
        this.divisas= new Array<Divisa>();

        result.forEach((element:any) => {
          this.divisa=new Divisa();
          Object.assign(this.divisa,element);
          this.divisas.push(this.divisa);       
        });
        console.log(result);
      },
      error=>{
          console.log("error")
      } 
    );
  }

  recuperarFiltro(){
    this.divisaService.getTransaccionesPorParametros(this.email).subscribe(
      result=>{
        this.divisas= new Array<Divisa>();

        result.forEach((element:any) => {
          this.divisa=new Divisa();
          Object.assign(this.divisa,element);
          this.divisas.push(this.divisa);       
        });
        console.log(result);
      },
      error=>{
          console.log("error")
      } 
    );
    
  }

  recuperarFiltroMoneda(){
    this.divisaService.getTransaccionesPorMonedas(this.origen,this.destino).subscribe(
      result=>{
        this.divisas= new Array<Divisa>();

        result.forEach((element:any) => {
          this.divisa=new Divisa();
          Object.assign(this.divisa,element);
          this.divisas.push(this.divisa);       
        });
        console.log(result);
      },
      error=>{
          console.log("error")
      } 
    );
    
  }

  ngOnInit(): void {
  }

}
