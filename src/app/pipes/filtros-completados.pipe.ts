import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtrosCompletados',
  pure: false
})
export class FiltrosCompletadosPipe implements PipeTransform {

  transform(listas: Lista[], completada:boolean = true): Lista[] {
    return listas.filter(lista => lista.terminada === completada);
  }

}
