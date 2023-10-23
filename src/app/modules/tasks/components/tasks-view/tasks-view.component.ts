import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '@core/Models';
import { TasksService } from '../../services/tasks.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.css']
})
export class TasksViewComponent implements OnInit {

  @Input() tasks: Task[] = [];
  @Output() taskToDelete: EventEmitter<number> = new EventEmitter();
  @Output() taskToUpdate: EventEmitter<Task> = new EventEmitter();

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {

  }

  public deleteTask(id: number) {
    this.taskToDelete.emit(id);
  }

  public updateTask(task: Task) {
    this.taskToUpdate.emit(task);
  }

}
