import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Priority, Todo } from './todo.model';
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

  getTodoUpdateListener() {
    return this.todoItemsUpdated.asObservable();
  }

  getTodoItems() {
    this.http.get<Todo[]>(BACKEND_URL).subscribe((todoData) => {
      this.todoItems = todoData;
      this.todoItemsUpdated.next({ todos: [...this.todoItems] });
    });
  }

  getTodoItem(id: string) {
    return this.http.get<Todo>(BACKEND_URL + id);
  }

  AddTodoItem(
    name: string,
    description: string,
    creationTime: Date,
    dueDate: Date,
    priority: Priority
  ) {
    const todoData = new FormData();
    todoData.append('name', name);
    todoData.append('description', description);
    todoData.append('creationTime', creationTime.toDateString());
    todoData.append('dueDate', dueDate.toDateString());
    todoData.append('priorityLevel', priority.toString());
    this.http.post<Todo>(BACKEND_URL, todoData).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  updateTodoItem(id: string, name: string, description: string) {}
}
