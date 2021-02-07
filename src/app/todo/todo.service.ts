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
    this.http.get<Todo[]>(BACKEND_URL).subscribe((todoData) => {
      this.todoItems = todoData;
      this.todoItemsUpdated.next({ todos: [...this.todoItems] });
    });
  }

  getTodoUpdateListener() {
    return this.todoItemsUpdated.asObservable();
  }
}
