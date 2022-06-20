import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Divisa } from '../models/divisa';

@Injectable({
  providedIn: 'root'
})
export class DivisaService {

  constructor(private _http:HttpClient) { }


 ///////// API DEL TP DE SERVICIOS COTIZAR
  public convertMoney(from_value:string,from_type:string,to_type:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com',
      'X-RapidAPI-Key': ''//'2c5907e80dmshbb0bb57c63c069ep15782djsnc2fb48875b31'//'f00e4aeac8msh702478c3972c46ep1f4a49jsn2a0af2d1553b' 
      }),
      }

    const body = new HttpParams()
      .set('from-value', from_value)
      .set('from-type', from_type)
      .set('to-type', to_type)

  return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",body, httpOptions);
  }




  public altaDivisa(divisa:Divisa):Observable<any>{
    const httpOptions = {
    headers: new HttpHeaders({
     'Content-type':'application/json',
    }),
    };
    return this._http.post<Divisa>("http://localhost:3000/api/transaccion",divisa, httpOptions);
    }




///////////////PUNTO 2 PARTE 2
  public getTransacciones():Observable<any>{
    const httpOptions = {
    headers: new HttpHeaders({
     'Content-type':'application/json',
    }),
    }
  
    return this._http.get("http://localhost:3000/api/transaccion", httpOptions);
    }



    public getTransaccionesPorParametros(emailCliente:string):Observable<any>{
      const httpOptions = {
      headers: new HttpHeaders({
       'Content-type':'application/json',
      }),
      }
    
      return this._http.get("http://localhost:3000/api/transaccion/emailCliente/?emailCliente="+emailCliente, httpOptions);
      }


      public getTransaccionesPorMonedas(monedaOrigen:string,monedaDestino:string):Observable<any>{
        const httpOptions = {
        headers: new HttpHeaders({
         'Content-type':'application/json',
        }),
        }
      
        return this._http.get("http://localhost:3000/api/transaccion/monedas/?monedaOrigen="+monedaDestino+"&monedaDestino="+monedaDestino, httpOptions);
        }
}
