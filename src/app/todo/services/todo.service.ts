import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseURL: string = "http://localhost:3000/todo";

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseURL)
  }

  // private todos: Todo[] = [];
  // private idCounter = 1;

  // public getOne(id: number): Todo | null {
  //   return this.todos.find(todo => todo.id == id) || null;
  // }

  public getOne(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.baseURL + '/' + id)
  }

  // public creatOne(label: string): Todo {
  //   const newTodo: Todo = {
  //     id: this.idCounter++,
  //     label
  //   };
  //   this.todos.push(newTodo);
  //   return newTodo;
  // }

  public creatOne(newTodo: { label: string }): Observable<Todo> {
    return this.http.post<Todo>(this.baseURL, newTodo)
  }

  // public deletOne(id: number): void {
  //   if (id !== -1)
  //     this.todos.splice(id, 1);
  // }

  public deletOne(id: number): Observable<void> {
    return this.http.delete<void>(this.baseURL + '/' + id);
  }

}
