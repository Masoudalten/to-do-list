import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { TodoComponent } from "./todo/todo.component";
import { TodoListComponent } from "./todo/todo-list/todo-list.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, TodoComponent, TodoListComponent]
})
export class AppComponent {
  title = 'to-do-list';
}
