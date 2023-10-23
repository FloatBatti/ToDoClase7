import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '@core/Models';
import { TasksService } from '@modules/tasks/services/tasks.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  @ViewChild('editTaskDialog', { static: false }) editTaskDialog: TemplateRef<any>;


  public tasks: Task[] = [];
  public editTask: Task= {id:0, done:false, priority: 0, description: '' };
  public isPopupVisible = false;

  constructor(private taskService: TasksService, private dialog: MatDialog) { }

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

  public updateTask() {
    console.log(this.editTask);
    this.taskService.updateTask(this.editTask).then(bool => console.log("Se updateo la tarea: ", bool));
    this.closeDialog();
    this.searchTasks();
  }

  public openEditTaskDialog(task: Task): void {
    this.editTask = structuredClone(task);

    const dialogRef = this.dialog.open(this.editTaskDialog, {
      height: '300px',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result: Task | undefined) => {
      if (result) {
        // Por ahora no pasa nada
      }
    });

  }

  public closeDialog(): void {
    this.dialog.closeAll(); // Cierra todos los diálogos abiertos
  }

}
