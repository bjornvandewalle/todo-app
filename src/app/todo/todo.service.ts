import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Todo } from './todo.model';
import { stringify } from '@angular/compiler/src/util';

const BACKEND_URL = `${environment.apiUrl}/todoitems/`;

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoItems: Todo[] = [];
  private todoItemsUpdated = new Subject<{
    todos: Todo[];
  }>();

  constructor(private http: HttpClient, private router: Router) {}

  getTodoItems() {
    this.http
      .get<{ todos: any }>(BACKEND_URL)
      .pipe(
        map((todoData) => {
          return {
            todos: todoData.todos.map((todo) => {
              return {
                id: todo.id,
                name: todo.name,
                description: todo.description,
                enteredOn: todo.enteredOn,
                endtime: todo.endtime,
                finished: todo.finished,
              };
            }),
          };
        })
      )
      .subscribe((transformedTodoData) => {
        this.todoItems = transformedTodoData.todos;
        this.todoItemsUpdated.next({ todos: [...this.todoItems] });
      });
  }
}
