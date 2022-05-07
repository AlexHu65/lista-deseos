import { ListaItem } from './lista-item-model';

export class Lista {

    id:number;
    titulo:string;
    ceadaEn: Date;
    terminadaEn:Date;
    terminada:boolean;
    items: ListaItem[];

    constructor(titulo:string) {
        
        this.titulo = titulo;
        this.ceadaEn = new Date();
        this.terminada = false;
        this.items = [];

        this.id = new Date().getTime();
    }
}