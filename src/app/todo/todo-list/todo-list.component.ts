import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoComponent } from '../todo.component';
import { NgFor } from '@angular/common';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoItemComponent } from "../todo-item/todo-item.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  imports: [TodoComponent, NgFor, AddTodoComponent, TodoItemComponent]
})
export class TodoListComponent {
  @Input() todos: string[] = [];
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  onDeleteClick(index: number) {
    this.delete.emit(index);
  }
}
