import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [];
  private idCounter = 1;

  public getAll(): Todo[] {
    return this.todos;
  };

  public getOne(id: number): Todo | null {
    return this.todos.find(todo => todo.id == id) || null;
  }

  public creatOne(label: string): Todo {
    const newTodo: Todo = {
      id: this.idCounter++,
      label
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  public deletOne(id: number): void {
    if (id !== -1)
      this.todos.splice(id, 1);
  }

}
