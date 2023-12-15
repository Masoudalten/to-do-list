import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  imports: [FormsModule, TodoListComponent, AddTodoComponent,NgFor]
})
export class TodoComponent {
  todos: string[] = [];

  onAdd(newTodo: string) {
    this.todos.push(newTodo);
  }

  onDelete(index: number) {
    this.todos.splice(index, 1);
  }
}

