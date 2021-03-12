import { TodosComponent } from './../todos/todos.component';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class UsersModule {}
