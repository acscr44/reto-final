import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }

  getOfertas() {
    return this.http.get<Array<iOfertas>>('http://localhost:9966/petclinic/api/ofertas');
  }



  getActivos() {
    //return this.http.get<Array<iOfertas>>('http://localhost:9966/petclinic/api/ofertas/activos');
    return this.http.get('http://localhost:9966/petclinic/api/ofertas/activas');
  }


}
export interface iOfertas {
  id: number;
  titulo: string;
  descripcion: string;
  descuento: number;
  f_expiracion: Date;
}
