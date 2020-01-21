import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareasPendientesComponent } from './tareas-pendientes.component';


const routes: Routes = [
  {
    path: '',
    component: TareasPendientesComponent,
    data: {
      title: 'coordinator-profile'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class TareasPendientesRoutingModule { }
