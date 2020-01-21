import { LayoutComponent } from './layout/layout.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
      },
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'main',
            loadChildren: "./views/main/main.module#MainModule"
          },
          {
            path: 'reportes',
            loadChildren: "./views/reports/reports.module#ReportsModule"
          },
          {
            path: "ver-servicios",
            loadChildren: "./views/verservicios/verservicios.module#VerserviciosModule"
          },
          {
            path: 'nuevo-servicio',
            loadChildren: "./views/servicios/servicios.module#ServiciosModule"
          },
          {
            path: 'calendario',
            loadChildren: "./views/calendar/calendar.module#CalendarModule"
          },
          {
            path: 'ver-clientes',
            loadChildren: "./views/clientes/clientes.module#ClientesModule"
          },
          {
            path: 'nuevo-cliente',
            loadChildren: "./views/addcliente/addcliente.module#AddclienteModule"
          },
          {
            path: 'ver-encuestas',
            loadChildren: "./views/encuestas-generales/encuestas-generales.module#EncuestasGeneralesModule"
          },
          {
            path: 'ver-quejas',
            loadChildren: "./views/encuestas-quejas/encuestas-quejas.module#EncuestasQuejasModule"
          },
          {
            path: 'tareas-pendientes',
            loadChildren: "./views/tareas-pendientes/tareas-pendientes.module#TareasPendientesModule"
          }
        ]
      }
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
