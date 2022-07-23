import { NgModule } from '@angular/core';
import { FiltrosCompletadosPipe } from './filtros-completados.pipe';

@NgModule({
  declarations: [
    FiltrosCompletadosPipe
  ],
  exports:[
    FiltrosCompletadosPipe
  ]
})

export class PipesModule { }
