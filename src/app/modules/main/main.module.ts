import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { TasksModule } from '@modules/tasks/tasks.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    TasksModule,
    SharedModule,
    FormsModule
  ]
})
export class MainModule { }
