import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Librom } from '../models/librom';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private _http:HttpClient) { }
  
  public getLibro():Observable<any>{
  const httpOptions = {
  headers: new HttpHeaders({
   'Content-type':'application/json',
  }),
  }

  return this._http.get("http://localhost:3000/api/libro", httpOptions);
  }

  //DESTACADO
  public getLibroDestacado():Observable<any>{
    const httpOptions = {
    headers: new HttpHeaders({
     'Content-type':'application/json',
    }),
    }
  
    return this._http.get("http://localhost:3000/api/libro/destacado", httpOptions);
    }
  //////////////////////////////////////////////////////////
  public altaLibro(libro:Librom):Observable<any>{
    const httpOptions = {
    headers: new HttpHeaders({
     'Content-type':'application/json',
    }),
   // params: new HttpParams({

   // })

    };
  //  let body=JSON.stringify(libro);
  
    return this._http.post<Librom>("http://localhost:3000/api/libro",libro, httpOptions);
    }

}
