import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/services/logger.service';
import { Cv } from '../model/cv.model';
import { UtilsService } from '../../services/utils.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedCv: Cv = null;
  date = new Date();
  constructor(
    private loggerService: Logger,
    private utilsService: UtilsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.toastr.info('Bienvenu dans notre Cv Tech :)');
  }
  getSelectedCv(cv: Cv): void {
    this.selectedCv = cv;
    this.loggerService.logger(cv);
    this.utilsService.sayHello();
  }
}
