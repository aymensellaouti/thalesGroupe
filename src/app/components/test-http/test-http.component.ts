import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css'],
})
export class TestHttpComponent implements OnInit {
  constructor(private http: HttpClient, private tostr: ToastrService) {}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos')
    /* .map((todo) => {
      name: todo.id,
      content: todo.title
    }) */
    .subscribe(
      (todos) => {
        console.log(todos);
      },
      (erreur: HttpErrorResponse) => {
        this.tostr.error(
          `Problème avec le serveur veuillez contacter l'admin : ` +
            erreur.message
        );
      },
      () => {
        console.log('it s over');
      }
    );
  }
}
