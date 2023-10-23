import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task, User } from '@core/Models';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  //! TASKS

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseURL}/tasks?_sort=priority&_order=asc`);
  }


/*   public getTasks(): Task[]{ NO ES RECOMENDABLE HACERLO

    let taskList: Array<Task> = [];

    this.http.get<Task[]>(`${this.baseURL}/tasks?_sort=priority&_order=asc`).subscribe({

      next: (data) => taskList = data,
      error: (error) => {throw Error("No se pudo acceder a los datos")

    }})

    return taskList;
  } */

  public addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseURL}/tasks`, task);
  }

  public updateTask(task: Task): Observable<Task> {
    if (!task.id) throw Error("Task id is required");

    return this.http.patch<Task>(`${this.baseURL}/tasks/${task.id}`, task);
  }

  public deleteTask(id: number): Observable<boolean> {

    return this.http.delete(`${this.baseURL}/tasks/${id}`)
      .pipe(
        map(resp => true), // Si sale bien retorna true. Recibir un response significa que salio bien
        catchError(error => of(false)) // Si hay algun error en la solicitud me regresa falso
      );
  }

  //! Users

  public getToAuth(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users?email=${email}&password=${password}`);
  }

  /* Ejemplo de como trasnformar la respuesta de la api */
  public getUserNameById(id:number): Observable<string | null> {

    return this.http.get<User>(`${this.baseURL}/users/${id}`).pipe(
      map(user => user.userName),
      catchError(error => of(null))
    );
  }

}
