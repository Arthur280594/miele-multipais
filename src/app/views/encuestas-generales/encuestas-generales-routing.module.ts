import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncuestasGeneralesComponent } from './encuestas-generales.component';


const routes: Routes = [
  {
    path: '',
    component: EncuestasGeneralesComponent,
    data: {
      title: 'coordinator-profile'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class EncuestasGeneralesRoutingModule { }
