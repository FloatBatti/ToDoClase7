import { ITask, IUser } from "./Interfaces";

export class Task implements ITask {

  id: number | null;
  priority: number | null;
  description: string | null;
  done: boolean | null;

  constructor(task?: any) {
    this.id = task.id != null ? task.id : null;
    this.priority = task.priority != null ? task.priority : null;
    this.description = task.description != null ? task.description : null;
    this.done = task.done != null ? task.done : null;
  }
}

export class User implements IUser {

  id: number | null;
  userName: string | null;
  email: string | null;
  password: string | null;

  constructor(user?: any) {
    this.id = user.id != null ? user.id : null;
    this.userName = user.userName != null ? user.userName : null;
    this.email = user.email != null ? user.email : null;
    this.password = user.password != null ? user.password : null;
  }

}
