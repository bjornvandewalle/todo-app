import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss'],
})
export class TodoCreateComponent implements OnInit {
  todo: Todo;
  isLoading = false;

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {}

  onSaveTodo(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
  }
}
