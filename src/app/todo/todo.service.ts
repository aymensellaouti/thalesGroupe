import { Injectable } from '@angular/core';
import { Todo } from './model/todo';
import { Logger } from '../services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor(private logger: Logger) {}
  loggerTodo(): void {
    this.logger.logger(this.todos);
  }
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  deleteTodo(todo: Todo): boolean {
    const index = this.todos.indexOf(todo);
    if (index == -1) return false;
    this.todos.splice(index, 1);
    return true;
  }
}
