import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo/interfaces/todo.interface';
import { TodoService } from '../todo/services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  todo$: Observable<Todo>;

  constructor(private todoservice: TodoService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const todoId = this.activeRoute.snapshot.params['id'];
    this.todo$ = this.todoservice.getOne(todoId).pipe(
      catchError(error => {
        console.error(error);
        return of(null as unknown as Todo);
      })
    );
  }
}
