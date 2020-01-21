import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerEncuestasQuejasComponent } from './ver-encuestas-quejas.component';


const routes: Routes = [
  {
    path: '',
    component: VerEncuestasQuejasComponent,
    data: {
      title: 'coordinator-profile'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class VerEncuestasQuejasRoutingModule { }
