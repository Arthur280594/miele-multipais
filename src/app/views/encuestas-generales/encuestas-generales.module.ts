import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestasGeneralesComponent } from './encuestas-generales.component';
import { EncuestasGeneralesRoutingModule } from './encuestas-generales-routing.module';



@NgModule({
  declarations: [EncuestasGeneralesComponent],
  imports: [
    CommonModule,
    EncuestasGeneralesRoutingModule,
  ]
})
export class EncuestasGeneralesModule { }
