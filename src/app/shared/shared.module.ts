import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Error404Component } from './components/error404/error404.component';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    Error404Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent
  ]
})
export class SharedModule { }
