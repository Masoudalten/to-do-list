import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo: string = '';
  @Input() todoId?: number ;
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();
}
