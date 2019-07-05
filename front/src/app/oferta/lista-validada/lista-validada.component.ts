import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../service.service';


@Component({
  selector: 'app-lista-validada',
  templateUrl: './lista-validada.component.html',
  styleUrls: ['./lista-validada.component.css']
})
export class ListaValidadaComponent implements OnInit {

  listaactivos;
  constructor(private servicio: ServiceService) { }

  ngOnInit() {
    this.Activos();
  }
    Activos() {
      this.servicio.getActivos().subscribe(data => {
        this.listaactivos = data;
        console.log(data);
      });
    }
  }
