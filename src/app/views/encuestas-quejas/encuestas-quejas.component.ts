import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatPaginatorIntl, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-encuestas-quejas',
  templateUrl: './encuestas-quejas.component.html',
  styleUrls: ['./encuestas-quejas.component.scss']
})
export class EncuestasQuejasComponent implements OnInit {
  public mask_telefono = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  constructor() { }

  ngOnInit() {
  }

}
