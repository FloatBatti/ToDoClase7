import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksViewComponent } from './components/tasks-view/tasks-view.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TasksViewComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    TasksViewComponent,
    AddTaskComponent
  ]
})
export class TasksModule { }
