import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncuestasQuejasComponent } from './encuestas-quejas.component';


const routes: Routes = [
  {
    path: '',
    component: EncuestasQuejasComponent,
    data: {
      title: 'coordinator-profile'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class EncuestasQuejasRoutingModule { }
