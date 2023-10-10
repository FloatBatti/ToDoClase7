import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '@core/Models';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.css']
})
export class TasksViewComponent implements OnInit {

  @Input() tasks: Task[] = [];
  @Output() taskToDelete: EventEmitter<number> = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {

  }

  public deleteTask(id: number) {
    this.taskToDelete.emit(id);
  }

}
