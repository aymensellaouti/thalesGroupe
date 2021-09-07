import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  @Output() forwardSelectedCv = new EventEmitter();
  ngOnInit(): void {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 39, 'teacher', 'as.jpg', 123456),
      new Cv(2, 'Kemehlo', 'estelle', 20, 'Dev', '', 8547854),
      new Cv(2, 'Godart', 'Quentin', 20, 'Dev', '              ', 1111111),
    ];
  }

  forwardCv(cv: Cv): void {
    this.forwardSelectedCv.emit(cv);
  }
}
