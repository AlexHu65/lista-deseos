import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonList } from '@ionic/angular';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';


@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;
  @ViewChild(IonList) lista: IonList;

  constructor(public deseosService: DeseosService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {}

  detalle(listaId:string | number){

    if(this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${listaId}`);   
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);   
    }

  }

  borrarLista(lista:Lista){
    this.deseosService.borrarLista(lista);
  }

  async editarLista(lista:Lista){

    const alert =  await this.alertCtrl.create({
      header: 'Editar lista',
      inputs: [{
        name: 'titulo',
        type: 'text',
        value: lista.titulo,
        placeholder: 'Nombre de la lista'
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Editar',
          handler: (data) => {

            if (data.titulo.length === 0) {
              return;
            }

            lista.titulo =  data.titulo;
            this.deseosService.guardarStorage();
            this.lista.closeSlidingItems();

          }
        }
      ]
   });
   alert.present();

  }

}
