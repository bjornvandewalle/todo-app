import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];
  isLoading = false;

  private todosSub: Subscription;

  constructor(public todoService: TodoService) {}

  ngOnInit() {
    this.isLoading = true;
    this.todoService.getTodoItems();
    this.todosSub = this.todoService
      .getTodoUpdateListener()
      .subscribe((todoData) => {
        this.isLoading = false;
        this.todos = todoData.todos;
      });
  }

  ngOnDestroy() {
    this.todosSub.unsubscribe();
  }
}
