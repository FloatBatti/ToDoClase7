import { Injectable } from '@angular/core';
import { Task } from '@core/Models';
import { ApiService } from '@core/services/api.service';
import { lastValueFrom } from 'rxjs';

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

  public async updateTask(task: Task): Promise<Task | null> {

    let resp: Task | null = null;

    try{

      const apiResponse = this.apiService.updateTask(task);
      resp = await lastValueFrom(apiResponse);

    }catch(error){

      throw error;
    }

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
