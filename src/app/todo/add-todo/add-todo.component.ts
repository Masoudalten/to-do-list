import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  newTodo: string = '';
  @Output() add: EventEmitter<string> = new EventEmitter<string>();

  onAddClick() {
    if (this.newTodo.trim() !== '') {
      this.add.emit(this.newTodo);
      this.newTodo = '';
    }
  }
}
