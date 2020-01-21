import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddclienteComponent } from './addcliente.component';
import { AddclienteRoutingModule } from './addcliente-routing.module';
import { FormsModule } from '@angular/forms';
import { MatRadioModule, MatInputModule, MatFormFieldModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
 


@NgModule({
  declarations: [AddclienteComponent],
  imports: [
    CommonModule,
    AddclienteRoutingModule,
    FormsModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    TextMaskModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class AddclienteModule { }
