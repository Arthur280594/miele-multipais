import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Clientes, direccion, datosfiscales, servicio, producto, visita, tecnico  } from '../../models/cliente/cliente'
@Component({
  selector: 'app-addcliente',
  templateUrl: './addcliente.component.html',
  styleUrls: ['./addcliente.component.scss']
})
export class AddclienteComponent implements OnInit {

  public mask_telefono = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public cliente = new Clientes();
  public direccion = new direccion();
  //public direccion_servicio = new direccion();
  public datosfiscales = new datosfiscales();
  public servicio = new servicio();
  public producto = new producto();
  public visita = new visita();
  value_productos: Productos_Servicio[] = [];
  value_productos_servicio: any[] = [];
  productos_cliente: Productos_Cliente[] = [];
  estados: string[] = [];
  municipios: string[] = [];
  localidades: string[] = [];
  tipo_servicio: string[] = [];
  sub_tipo_servicio: string[] = [];
  distribuidor_servicio: string[] = [];
  estados_datos_fiscales: any = [];
  municipios_datos_fiscales: string[] = [];
  //estados_direccion_servicios: string[] = [];nuevo_producto
  //municipios_direccion_servicios: string[] = [];
  localidades_datos_fiscales: string[] = [];
  //localidades_direccion_servicios: string[] = [];
  mostrar_distribuidor: boolean = true;
  ver_productos: boolean = true;
  ver_nuevo_producto: boolean = false;
  preventAbuse = false;
  text_busqueda: string = "";
  //valid_tipo_taller: boolean = false;
  categoria_servicio: number = 0;
  no_tecnico: number = 0;
  no_checks: number = 0;
  txt_tecnico: string;
  concepto: string;
  id_producto_enviar: string = "";
  categoria_servicio_cantidad: number;
  public values: string[];

  public mask = [/[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];
  public mask_cp = [/\d/, /\d/, /\d/, /\d/, /\d/];

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router) { }
  displayedColumns = ['select', 'Modelo', 'SKU', 'Tipo'];
  dataSource = new MatTableDataSource();

  
  ngOnInit() {
    this.estados_datos_fiscales = [{'desc_estado': 'mexico' }]
  }

}

export class Productos_Servicio {
  id_producto: number;
  modelo: string;
  sku: string;
  tipo: string;
  id_categoria: number;
  hora_tecnico: number;
  hora_precio: string;
  precio_visita: number;
  no_tecnicos: number;
  primera_visita: boolean = false;
}

export class Productos_Cliente {
  Id_Producto: number;
  FinGarantia: any;
  FechaCompra: any;
  NoPoliza: string;
  Id_EsatusCompra: any;
  NoOrdenCompra: string;
}