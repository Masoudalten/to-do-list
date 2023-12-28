import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { TodoComponent } from "./todo/todo.component";
import { TodoListComponent } from "./todo/todo-list/todo-list.component";



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'to-do-list';
}
