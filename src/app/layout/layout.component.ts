import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy{

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor(private router: Router) { }

  ngOnInit() {
    // add the the body classes
    console.log("init");
    console.log("init");
    this.router.navigate["/main"];
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');
  }

  ngAfterContentInit(){
    console.log("after");
    this.router.navigate["/main"];
    
  }

  ngAfterViewInit(){
    console.log("view");
    this.router.navigate["/main"];
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }

}
