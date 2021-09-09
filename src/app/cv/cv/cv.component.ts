import { Component, OnInit } from '@angular/core';
/* import { Logger } from 'src/app/services/logger.service'; */
import { Cv } from '../model/cv.model';
/* import { UtilsService } from '../../services/utils.service'; */
import { ToastrService } from 'ngx-toastr';
/* import { TodoService } from '../../todo/todo.service'; */
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  /*   selectedCv: Cv = null; */
  date = new Date();
  nbre = 0;
  constructor(
    /*     private loggerService: Logger,
    private utilsService: UtilsService,

     private todoService: TodoService */
    private toastr: ToastrService,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.toastr.info('Bienvenu dans notre Cv Tech :)');
    this.cvService.selectCvSubject
      .pipe(distinctUntilChanged())
      .subscribe((onSenFou) => {
        this.nbre++;
      });
  }
  /*   getSelectedCv(cv: Cv): void {
    this.selectedCv = cv;
    this.loggerService.logger(cv);
    this.utilsService.sayHello();
    this.todoService.loggerTodo();
  } */
}
