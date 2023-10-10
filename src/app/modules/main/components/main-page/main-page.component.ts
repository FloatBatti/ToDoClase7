import { Component, OnInit } from '@angular/core';
import { Task } from '@core/Models';
import { TasksService } from '@modules/tasks/services/tasks.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public tasks: Task[] = [];

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.searchTasks();
  }

  public searchTasks() {
    this.taskService.getTasks().then(data => this.tasks = data);
  }

  public addTask(task: Task) {
    this.taskService.addTask(task).then(data => console.log("Se arego la tarea:", data));
    this.searchTasks();
  }

  public deleteTask(id: number) {
    this.taskService.deleteTask(id).then(bool => console.log("Se elimino la tarea: ", bool));
    this.searchTasks();
  }

}
