import { User } from "./Models";

export interface ITask {
  id: number | null;
  priority: number | null;
  description: string | null;
  done: boolean | null;
}

export interface IUser {
  id: number | null;
  userName: string | null;
  email: string | null;
  password: string | null;
}

export interface LoginRespone {
  user: User,
  token: string
}

