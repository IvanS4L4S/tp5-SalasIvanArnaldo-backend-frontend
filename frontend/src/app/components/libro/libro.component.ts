import { Component, OnInit } from '@angular/core';
import { Librom } from 'src/app/models/librom';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  
  indice:number=0;

  libro!:Librom;
  libros!:Array<Librom>;
  constructor(private libroService:LibroService) { 
    
    this.libros=new Array<Librom>();

    this.mostrarLibro();
    
  }
 
  comenzar(){
    if (this.indice < this.libros.length){
      this.libro = this.libros[this.indice];
    }
  }
  continuar(){
    this.indice=this.indice + 1;
    if (this.indice < this.libros.length){
      this.libro = this.libros[this.indice];
    }else{
      this.indice=this.indice = 0;
      this.libro = this.libros[this.indice];
    }
  }
  retroceder(){
    if (this.indice != 0){
      this.indice = this.indice-1;
    }
    if (this.indice < this.libros.length){
      this.libro = this.libros[this.indice];
    }
    if (this.indice == 0){
      this.indice = this.indice+this.libros.length;
    }
}
   mostrarLibro(){
    this,this.libroService.getLibroDestacado().subscribe(
      result=>{
        this.libros= new Array<Librom>();

        result.forEach((element:any) => {
          this.libro=new Librom();
          Object.assign(this.libro,element);
          this.libros.push(this.libro);
          
        });;
       
        
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
