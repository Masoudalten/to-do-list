import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  newTodo: string = '';
  @Output() add: EventEmitter<string> = new EventEmitter<string>();

  // onInputChange(event: Event): void {
  //   this.newTodo = (event.target as HTMLInputElement).value;
  // }

  onAddClick(): void {
    if (this.newTodo.trim() !== '') {
      this.add.emit(this.newTodo);
      this.newTodo = '';
    }
  }
}
