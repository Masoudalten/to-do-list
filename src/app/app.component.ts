import { Component } from '@angular/core';
import { Todo } from './todo/interfaces/todo.interface';
import { TodoService } from './todo/services/todo.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ToDoList';
}
