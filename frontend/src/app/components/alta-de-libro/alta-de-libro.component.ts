import { Component, OnInit } from '@angular/core';
import { Librom } from 'src/app/models/librom';
import { LibroService } from 'src/app/services/libro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-de-libro',
  templateUrl: './alta-de-libro.component.html',
  styleUrls: ['./alta-de-libro.component.css']
})
export class AltaDeLibroComponent implements OnInit {

  libro!:Librom;

  destacado: boolean=false;

  constructor(private libroService:LibroService) {
    this.libro= new Librom();
   }

   cargar(){

    this.libro.destacado=this.destacado;
    this.libroService.altaLibro(this.libro).subscribe(
      (result)=>{
        const resultado=result;
        console.log(result);
        if(result.status=="1"){
          
          //da aviso del estado con una alerta
          Swal.fire({
           // alert(result.msg);
            title: result.msg,
            text: this.libro.titulo,
            imageUrl: this.libro.imagen,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image',
          });
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

}
