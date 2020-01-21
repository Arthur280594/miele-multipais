import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerEncuestasQuejasComponent } from './ver-encuestas-quejas.component';
import { VerEncuestasQuejasRoutingModule } from './tareas-pendientes-routing.module';



@NgModule({
  declarations: [VerEncuestasQuejasComponent],
  imports: [
    CommonModule,
    VerEncuestasQuejasRoutingModule
  ]
})
export class VerEncuestasQuejasModule { }
