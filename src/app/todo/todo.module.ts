import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularMaterailModule } from '../angular-material.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';

@NgModule({
  declarations: [TodoListComponent, TodoCreateComponent],
  imports: [CommonModule, RouterModule, AngularMaterailModule, FormsModule],
})
export class TodoModule {}
