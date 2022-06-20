import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  constructor(private _http:HttpClient) { }


  //me mostara todos los pasajes 
  public getPasajes():Observable<any>{
    const httpOptions = {
    headers: new HttpHeaders({ 
    }),
    params: new HttpParams({
    })
    }
    return this._http.get("http://localhost:3000/api/pasaje", httpOptions);
    }

///parte 1
    public borrarPasajero(id:string):Observable<any>{
      const httpOptions = {
      headers: new HttpHeaders({
       'Content-type':'application/json',
      }),
      }
    
      return this._http.delete("http://localhost:3000/api/pasaje/"+id, httpOptions);
      }
  

      public getPasajeFiltro(categoriaPasajero:string):Observable<any>{
        const httpOptions = {
        headers: new HttpHeaders({
         'Content-type':'application/json',
        }),
        }
      
        return this._http.get("http://localhost:3000/api/pasaje/categoria/?categoriaPasajero="+categoriaPasajero, httpOptions);
        }

 //PARA LA PARTE 2
 



 
      public getPersonas():Observable<any>{
        const httpOptions = {
        headers: new HttpHeaders({
         'Content-type':'application/json',
        }),
        }
       return this._http.get("http://localhost:3000/api/persona", httpOptions);
     }

   ////////Para la carga de Pasajeros
   getPasajeA(id:string):Observable<any>{
    const httpOptions = {
    headers: new HttpHeaders({
    }),
    params: new HttpParams({

    }).append("id",id)
    }
  
   return this._http.get("http://localhost:3000/api/pasaje/"+id, httpOptions);
 }

 public altaPasaje(pasaje:Pasaje):Observable<any>{
  const httpOptions = {
  headers: new HttpHeaders({
   "Content-Type":"application/json"
  }),
  params: new HttpParams({

  })

  };
  let body = JSON.stringify(pasaje);

  return this._http.post("http://localhost:3000/api/pasaje",body, httpOptions);
  }


 public actualizarPasaje(pasaje:Pasaje):Observable<any>{
  const httpOptions = {
  headers: new HttpHeaders({
   'Content-type':'application/json',
  }),
  params: new HttpParams({

  })
  };

  let body =JSON.stringify(pasaje);
 return this._http.put("http://localhost:3000/api/pasaje/"+pasaje._id,body, httpOptions);
}

}
