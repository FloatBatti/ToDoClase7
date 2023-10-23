import { Injectable } from '@angular/core';
import { Task } from '@core/Models';
import { ApiService } from '@core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private apiService: ApiService) { }

  public getTasks(): Promise<Task[]> {

    return new Promise<Task[]>((resolve, reject) => {

      this.apiService.getTasks().subscribe({

        next: data => resolve(data),
        error: error => reject(error)
      })
    });

  }


  public addTask(task: Task): Promise<Task> {

    return new Promise<Task>((resolve, reject) => {
      this.apiService.addTask(task).subscribe({

        next: data => resolve(data),
        error: error => reject(error)
      })
    });

  }

  public updateTask(task: Task): Task | null {

    let resp: Task = new Task();

    this.apiService.updateTask(task).subscribe({
      next: (data) => { resp = data },
      error: (error) => { throw error }
    })

    return resp;
  }

  public deleteTask(id: number): Promise<boolean> {

    return new Promise<boolean>((resolve, reject) => {
      this.apiService.deleteTask(id).subscribe({

        next: bool => resolve(bool),
        error: error => reject(error)
      })
    });
  }

  /* Como no retornar la información

    public getTasks(): Task[]{

    let tasks: Array<Task> = [];

    this.apiService.getTasks().subscribe({

      next: (data) =>{
        data.forEach(task => tasks.push(task))
      },
      error: (error) =>{throw error}
    })

    return tasks; Como el observable es asincronico puede ser que nos devuelva un arreglo vació, por eso se hacen promesas
  }




  */



}
