import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { NgFor } from '@angular/common';
import { TodoService } from './services/todo.service';
import { Todo } from './interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',

})
export class TodoComponent {
  todos: Todo[] = this.todoService.getAll();

  constructor(private todoService: TodoService) { }

  onAdd(todoLabel: string): void {
    const newTodo = this.todoService.creatOne(todoLabel);
  }

  onDelete(index: number): void {
    this.todoService.deletOne(index);
  }
}

