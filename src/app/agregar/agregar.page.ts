import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeseosService } from '../services/deseos.service';
import { Lista } from '../models/lista.model';
import { ListaItem } from '../models/lista-item-model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage  {

  lista: Lista;
  nombreItem: string = '';
  titulo: string = '';

  constructor(private router: Router, private deseosService:DeseosService, private route:ActivatedRoute) {
    const listaId = this.route.snapshot.paramMap.get('listaId');
    this.lista = this.deseosService.obtenerLista(listaId);

    if(this.lista){
      this.titulo = this.lista.titulo;
    }

   }

  public volver() {
    this.router.navigateByUrl('');
  }

  agregarItem(){

    if(this.nombreItem.length === 0){
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = '';
    this.deseosService.guardarStorage();

  }

  cambioCheck(item:ListaItem){
    const pendientes = this.lista.items.filter( item => !item.completado).length;
    if(pendientes === 0){
      this.lista.terminadaEn = new Date();
      this.lista.terminada  = true;
    }else{
      this.lista.terminada  = false;
      this.lista.terminadaEn =  null;
    }
    this.deseosService.guardarStorage();
  }

  borrar(i:number){
    this.lista.items.splice(i,1);
    this.deseosService.guardarStorage();
  }

}
