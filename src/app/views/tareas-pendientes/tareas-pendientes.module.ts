import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareasPendientesComponent } from './tareas-pendientes.component';
import { TareasPendientesRoutingModule } from './tareas-pendientes-routing.module';



@NgModule({
  declarations: [TareasPendientesComponent],
  imports: [
    CommonModule,
    TareasPendientesRoutingModule
  ]
})
export class TareasPendientesModule { }
