import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-obervable',
  templateUrl: './test-obervable.component.html',
  styleUrls: ['./test-obervable.component.css'],
})
export class TestObervableComponent implements OnInit {
  constructor(private tostr: ToastrService) {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    observable.subscribe((val) => {
      console.log(val);
    });
    observable.subscribe(
    (data) => {
      this.tostr.info('Je viens de recevoir ' + data);
    },
    (erreur) => {this.tostr.error('erreur');},
    () => {this.tostr.success('travail accompli')}
    );
  }
  ngOnInit(): void {}
}
