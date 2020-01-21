import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestasQuejasComponent } from './encuestas-quejas.component';
import { EncuestasQuejasRoutingModule } from './encuestas-quejas-routing.module';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatCheckboxModule, MatPaginatorModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatFormFieldControl, MatInputModule } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';



@NgModule({
  declarations: [EncuestasQuejasComponent],
  imports: [
    CommonModule,
    EncuestasQuejasRoutingModule,
    FormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatFormFieldModule,
    TextMaskModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class EncuestasQuejasModule { }
