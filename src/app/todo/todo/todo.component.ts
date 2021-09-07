import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Todo } from '../model/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todo = new Todo();
  constructor(private todoService: TodoService, private toastr: ToastrService) {
    this.todos = this.todoService.getTodos();
  }

  ngOnInit(): void {
    this.toastr.info('Bienvenu à votre gestionnaire de Todo');
  }
  addTodo(): void {
    this.todoService.addTodo(this.todo);
    this.toastr.success(`Le todo ${this.todo.name} a été ajouté avec succès`);
    this.todo = new Todo();
  }
  deleteTodo(todo): void {
    if (this.todoService.deleteTodo(todo)) {
      this.toastr.success(`Le todo a été supprimé avec succès`);
    } else {
      this.toastr.error(`Le todo ${this.todo.name} n'a pas été supprimé, veuillez contacter l'admin`);
    }
  }
}
