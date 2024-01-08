import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Todo } from '../todo/interfaces/todo.interface';
import { TodoService } from '../todo/services/todo.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { interval, map, Observable, of, Subject, Subscription, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit, OnDestroy {
  todoSelected: Todo;
  todo$: Observable<Todo>;
  todoId: number;
  counter = interval(1000);

  todoservice: TodoService = inject(TodoService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  private destroy$: Subject<void> = new Subject();

  ngOnInit() {
    this.todoId = this.activeRoute.snapshot.params['id'];
    const subscription = this.todoservice.getOne(this.todoId).pipe(
      switchMap((todo) => {
        this.todoSelected = todo;
        const counterSubscription =this.counter.subscribe((val) => { console.log(val) });
        this.destroy$.subscribe(() => counterSubscription.unsubscribe());
        return of(todo);
      }),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      
      console.log('Subscribed');
    })
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    console.log('Component destroyed and unsubscribed');
  }

}
