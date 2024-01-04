import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',

})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: string = '';

  constructor(private todoService: TodoService) { }


  ngOnInit(): void {
    this.todoService.getAll().subscribe((data) => {
      this.todos = data;
      //console.log(this.todos)
    },
      (error) => {
        console.log(error)
      })

  }


  loadTodoList(): void {
    this.todoService.getAll().subscribe(
      (data) => {
        this.todos = data;
        //console.log(this.todos);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onAdd(newTodo: string): void {
    this.todoService.creatOne({ label: newTodo }).subscribe((data) => {
      this.loadTodoList();
    },
      (error) => {
        console.error('Error adding todo item:', error)
      }
    )
  }


  onDelete(index: number): void {
    this.todoService.deletOne(index).subscribe(() => {
      this.loadTodoList();
    },
      (error) => {
        console.error(error);
      });
  }


}

