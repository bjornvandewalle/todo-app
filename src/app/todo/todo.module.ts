import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';

@NgModule({
  declarations: [TodoListComponent, TodoCreateComponent],
  imports: [CommonModule],
})
export class TodoModule {}
