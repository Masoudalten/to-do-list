import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  onDeleteClick(index: number): void {
    this.delete.emit(index);
  }
}
